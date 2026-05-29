'use client';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import Link from 'next/link';

export default function Estimate() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ type: 'residential', sqft: '', quality: 'standard' });
  const [result, setResult] = useState(null);

  const calculateEstimate = () => {
      const baseRate = data.type === 'residential' ? 150 : data.type === 'commercial' ? 200 : 120;
      const qualityMult = data.quality === 'standard' ? 1 : data.quality === 'premium' ? 1.3 : 1.6;
      const total = parseInt(data.sqft || 0) * baseRate * qualityMult;
      setResult(total);
      setStep(4);
  };

  return (
    <>
      <PageHero title="Cost Estimator" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Estimator' }]} />
      <section className="section container" style={{ maxWidth: '600px' }}>
        <div className="progress-bar">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className={`progress-bar__step ${step >= i ? 'progress-bar__step--active' : ''}`}>{i}</div>
            ))}
        </div>
        
        <div style={{ background: 'var(--color-off-white)', padding: '2.5rem', borderRadius: '12px', minHeight: '350px' }}>
            {step === 1 && (
                <div>
                    <h3 style={{ marginBottom: '1.5rem' }}>Project Type</h3>
                    <select className="form-select" value={data.type} onChange={e => setData({...data, type: e.target.value})}>
                        <option value="residential">Residential Build</option>
                        <option value="commercial">Commercial Build</option>
                        <option value="renovation">Renovation</option>
                    </select>
                    <button className="btn btn--primary" style={{ marginTop: '2rem' }} onClick={() => setStep(2)}>Next Step</button>
                </div>
            )}
            {step === 2 && (
                <div>
                    <h3 style={{ marginBottom: '1.5rem' }}>Size & Dimensions</h3>
                    <div className="form-group">
                        <label className="form-label">Total Built-up Area (Sq.Ft)</label>
                        <input type="number" className="form-input" value={data.sqft} onChange={e => setData({...data, sqft: e.target.value})} />
                    </div>
                    <button className="btn btn--outline" style={{ marginRight: '1rem' }} onClick={() => setStep(1)}>Back</button>
                    <button className="btn btn--primary" onClick={() => setStep(3)} disabled={!data.sqft}>Next Step</button>
                </div>
            )}
            {step === 3 && (
                <div>
                    <h3 style={{ marginBottom: '1.5rem' }}>Finish Quality</h3>
                    <select className="form-select" value={data.quality} onChange={e => setData({...data, quality: e.target.value})}>
                        <option value="standard">Standard (Basic finishes)</option>
                        <option value="premium">Premium (High-end finishes)</option>
                        <option value="luxury">Luxury (Custom, imported finishes)</option>
                    </select>
                    <div style={{ marginTop: '2rem' }}>
                        <button className="btn btn--outline" style={{ marginRight: '1rem' }} onClick={() => setStep(2)}>Back</button>
                        <button className="btn btn--primary" onClick={calculateEstimate}>Calculate Estimate</button>
                    </div>
                </div>
            )}
            {step === 4 && result !== null && (
                <div className="estimator__result">
                    <h3>Estimated Cost Range</h3>
                    <p style={{ margin: '1rem 0', color: 'var(--color-gray-500)' }}>Based on your inputs, your project may cost between:</p>
                    <div className="estimator__range">
                        ${(result * 0.85).toLocaleString(undefined, {maximumFractionDigits:0})} - ${(result * 1.15).toLocaleString(undefined, {maximumFractionDigits:0})}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', marginTop: '2rem' }}>*This is a rough estimate and does not constitute a binding quote.</p>
                    <Link href="/quote" className="btn btn--primary" style={{ marginTop: '1.5rem', width: '100%' }}>Get a Formal Quote</Link>
                </div>
            )}
        </div>
      </section>
    </>
  );
}
