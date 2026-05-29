import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
  try {
    const data = await req.json();
    
    if (!process.env.RESEND_API_KEY) {
       console.log('Mock email sent (No RESEND_API_KEY):', data);
       return NextResponse.json({ success: true, message: 'Message logged locally' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data: emailData, error } = await resend.emails.send({
      from: 'Build Brilliance <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@buildbrilliance.com',
      subject: "New Contact Request from ",
      html: "
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> </p>
        <p><strong>Email:</strong> </p>
        <p><strong>Phone:</strong> </p>
        <p><strong>Occupation:</strong> </p>
        <p><strong>Message:</strong><br/></p>
      "
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
