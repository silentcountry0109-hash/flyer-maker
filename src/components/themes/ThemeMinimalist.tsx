import React from 'react';
import type { FlyerData } from '../../types';

interface ThemeProps {
  data: FlyerData;
}

export const ThemeMinimalist: React.FC<ThemeProps> = ({ data }) => {
  return (
    <div className="theme-minimal h-full bg-[#f8fafc] text-[#0f172a] flex flex-col relative shadow-lg print:shadow-none" style={{
        fontFamily: 'system-ui, "Noto Sans TC", sans-serif',
        width: '210mm',
        height: '297mm',
        padding: '15mm 25mm',
        overflow: 'hidden'
    }}>
        <style dangerouslySetInnerHTML={{__html: `
            .theme-minimal, .theme-minimal * { box-sizing: border-box; }
            .theme-minimal .brand-dot { display: inline-block; width: 8px; height: 8px; background: #D12E35; border-radius: 50%; margin-right: 8px; }
            .theme-minimal .company { font-size: 12px; font-weight: 700; letter-spacing: 1px; color: #64748b; margin-bottom: 16px; text-transform: uppercase; }
            .theme-minimal .title { font-size: 26px; font-weight: 300; line-height: 1.2; margin-bottom: 16px; letter-spacing: -0.5px; }
            .theme-minimal .title strong { font-weight: 700; color: #D12E35; }
            .theme-minimal p.intro { font-size: 13.5px; line-height: 1.8; color: #475569; margin-bottom: 24px; white-space: pre-wrap; font-weight: 400; }
            
            .theme-minimal .features { display: flex; gap: 16px; margin-bottom: 24px; border-top: 1px solid #e2e8f0; padding-top: 16px;}
            .theme-minimal .feature-col { flex: 1; }
            .theme-minimal .f-title { font-size: 13.5px; font-weight: 700; margin-bottom: 8px; color: #0f172a; display: flex; align-items: center; gap: 8px; }
            .theme-minimal .f-desc { font-size: 12.5px; line-height: 1.5; color: #64748b; white-space: pre-wrap; }
            
            .theme-minimal .table-wrapper { margin-bottom: 20px; }
            .theme-minimal .data-table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
            .theme-minimal .data-table th, .theme-minimal .data-table td { padding: 8px 0; text-align: left; border-bottom: 1px solid #cbd5e1; }
            .theme-minimal .data-table th { color: #64748b; font-weight: 400; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;}
            .theme-minimal .data-table td { color: #334155; }
            
            .theme-minimal .promo-banner { background: #0f172a; color: white; padding: 12px 16px; font-size: 13px; font-weight: 500; margin-bottom: 20px; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; }
            
            .theme-minimal .footer-grid { display: flex; justify-content: space-between; align-items: flex-end; margin-top: auto; padding-top: 16px; border-top: 1px solid #e2e8f0; }
            .theme-minimal .info-item { margin-bottom: 8px; font-size: 12px; display: flex; align-items: baseline;}
            .theme-minimal .info-label { width: 80px; color: #64748b; font-size: 11px; flex-shrink: 0;}
            .theme-minimal .info-val { color: #0f172a; font-weight: 500; }
        `}} />

        <div className="company"><span className="brand-dot"></span>{data.brandText}</div>
        
        {/* We use a simple regex to bold text inside quotes for the title if possible, or just render it */}
        <h1 className="title" dangerouslySetInnerHTML={{
            __html: data.mainTitle.replace(/「(.*?)」/g, '<strong>「$1」</strong>')
        }} />

        <p className="intro">{data.introText}</p>

        <div className="features">
            {data.features.map((feat, idx) => (
                <div className="feature-col" key={idx}>
                    <div className="f-title">
                        <span style={{ color: '#D12E35', fontWeight: 900 }}>0{idx + 1}</span> 
                        {feat.title}
                    </div>
                    <div className="f-desc">{feat.description}</div>
                </div>
            ))}
        </div>

        <div className="table-wrapper">
            {data.scheduleItems.length === 1 ? (
                <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '12px', background: 'white', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Single Session</div>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 16px 0', color: '#0f172a' }}>{data.scheduleTitle}</h2>
                    <div style={{ fontSize: '18px', fontWeight: 600, color: '#D12E35', marginBottom: '16px' }}>{data.scheduleItems[0].topic}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', fontSize: '15px', color: '#475569', flexWrap: 'wrap' }}>
                        <div><strong style={{ color: '#0f172a' }}>Date:</strong> {data.scheduleItems[0].date} {data.scheduleItems[0].week && `(${data.scheduleItems[0].week})`}</div>
                        {data.scheduleItems[0].subject && <div><strong style={{ color: '#0f172a' }}>Subject:</strong> {data.scheduleItems[0].subject}</div>}
                        <div><strong style={{ color: '#0f172a' }}>Speaker:</strong> {data.scheduleItems[0].teacher}</div>
                    </div>
                </div>
            ) : data.scheduleItems.length > 1 ? (
                <>
                    <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px' }}>{data.scheduleTitle}</h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }}>Week</th>
                                <th style={{ width: '15%' }}>Date</th>
                                <th style={{ width: '10%' }}>Subject</th>
                                <th style={{ width: '50%' }}>Topic</th>
                                <th style={{ width: '15%' }}>Teacher</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.scheduleItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td style={{ fontWeight: 500 }}>{item.week}</td>
                                    <td style={{ fontWeight: 500 }}>{item.date}</td>
                                    <td><span style={{ background: '#e2e8f0', padding: '2px 8px', borderRadius: '4px', fontSize: '11px' }}>{item.subject}</span></td>
                                    <td>{item.topic}</td>
                                    <td>{item.teacher}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : null}
        </div>

        {data.promoText && (
            <div className="promo-banner">
                <span>{data.promoText}</span>
                <span style={{ background: '#D12E35', padding: '4px 12px', borderRadius: '4px', fontSize: '12px' }}>Special Offer</span>
            </div>
        )}

        <div className="footer-grid">
            <div>
                <div className="info-item"><div className="info-label">Location</div><div className="info-val">{data.contactInfo.location}</div></div>
                <div className="info-item"><div className="info-label">Time</div><div className="info-val">{data.contactInfo.time}</div></div>
                <div className="info-item"><div className="info-label">Price</div><div className="info-val">{data.contactInfo.price}</div></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>{data.qrLabel}</div>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>{data.contactInfo.registration}</div>
                        </div>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl)}`} alt="QR Code" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
                    </div>
                    {data.qrUrl2 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid #e2e8f0', paddingLeft: '12px' }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>{data.qrLabel2}</div>
                        </div>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl2)}`} alt="QR Code" style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
                    </div>
                    )}
                </div>
            </div>
        </div>

        <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '16px' }}>
            {data.footerNotes}
        </div>
    </div>
  );
};
