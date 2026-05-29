import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
  try {
    const data = await req.json();
    
    if (!process.env.RESEND_API_KEY) {
       console.log('Mock quote sent (No RESEND_API_KEY):', data);
       return NextResponse.json({ success: true, message: 'Quote logged locally' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data: emailData, error } = await resend.emails.send({
      from: 'Build Brilliance <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@buildbrilliance.com',
      subject: `New Quote Request from ${data.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Type:</strong> ${data.type}</p>
        <p><strong>Description:</strong><br/>${data.description}</p>
      `
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
