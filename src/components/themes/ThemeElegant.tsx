import React from 'react';
import type { FlyerData } from '../../types';

interface ThemeProps {
  data: FlyerData;
}

export const ThemeElegant: React.FC<ThemeProps> = ({ data }) => {
  return (
    <div className="theme-elegant h-full bg-[#0a192f] text-[#f8f9fa] flex flex-col relative shadow-lg print:shadow-none print:bg-[#0a192f] print:text-black" style={{
        fontFamily: 'Georgia, "Times New Roman", "Noto Serif TC", serif',
        width: '210mm',
        height: '297mm',
        padding: '15mm 25mm',
        overflow: 'hidden'
    }}>
        <style dangerouslySetInnerHTML={{__html: `
            .theme-elegant, .theme-elegant * { box-sizing: border-box; }
            .theme-elegant { border: 8px solid #1e293b; background-image: radial-gradient(circle at center, #112240 0%, #0a192f 100%); }
            
            /* Print mode optimizations for elegant dark theme */
            @media print {
                .theme-elegant { background: white !important; color: #1e293b !important; border-color: #cbd5e1 !important; border-width: 4px !important;}
                .theme-elegant .e-gold { color: #854d0e !important; }
                .theme-elegant .e-border-gold { border-color: #cbd5e1 !important; }
                .theme-elegant .f-card { background: #f8fafc !important; }
                .theme-elegant .data-table th { border-bottom-color: #cbd5e1 !important; color: #475569 !important; }
                .theme-elegant .data-table td { border-bottom-color: #e2e8f0 !important; color: #1e293b !important; }
            }

            .theme-elegant .e-gold { color: #d4af37; }
            .theme-elegant .e-border-gold { border-color: #d4af37; }
            
            .theme-elegant .header { text-align: center; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); position: relative;}
            .theme-elegant .header::after { content: "❖"; position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%); background: #0a192f; padding: 0 16px; color: #d4af37; font-size: 16px; }
            .theme-elegant .brand { font-size: 12px; font-weight: 400; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 12px; color: #94a3b8; }
            .theme-elegant .title { font-size: 26px; font-weight: 700; line-height: 1.3; margin: 0; letter-spacing: 1px;}
            
            .theme-elegant p.intro { font-size: 13.5px; line-height: 1.8;text-align: justify; margin-bottom: 24px; font-style: italic; color: #cbd5e1; white-space: pre-wrap; padding: 0 16px;}
            
            .theme-elegant .features { display: flex; gap: 16px; margin-bottom: 28px; }
            .theme-elegant .f-card { flex: 1; text-align: center; border: 1px solid rgba(212, 175, 55, 0.2); background: rgba(255, 255, 255, 0.02); padding: 16px;}
            .theme-elegant .f-num { display: inline-block; width: 32px; height: 32px; line-height: 30px; border: 1px solid #d4af37; border-radius: 50%; margin-bottom: 12px; color: #d4af37; font-size: 14px;}
            .theme-elegant .f-title { font-size: 15px; font-weight: 700; margin-bottom: 8px; letter-spacing: 1px; color: #f8f9fa;}
            .theme-elegant .f-desc { font-size: 12px; line-height: 1.5; color: #94a3b8; white-space: pre-wrap; font-family: system-ui, "Noto Sans TC", sans-serif; font-weight: 300; }
            
            .theme-elegant .s-title { font-size: 16px; font-weight: 700; text-align: center; margin-bottom: 16px; letter-spacing: 2px; text-transform: uppercase; color: #d4af37;}
            
            .theme-elegant .data-table { width: 100%; border-collapse: collapse; font-family: system-ui, "Noto Sans TC", sans-serif; font-size: 12px; margin-bottom: 24px;}
            .theme-elegant .data-table th, .theme-elegant .data-table td { padding: 8px 4px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }
            .theme-elegant .data-table th { color: #94a3b8; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; font-size: 10px; border-bottom: 1px solid rgba(212, 175, 55, 0.4); white-space: nowrap;}
            .theme-elegant .data-table td { color: #e2e8f0; font-weight: 300;}
            .theme-elegant .data-table td:nth-child(1), .theme-elegant .data-table td:nth-child(2), .theme-elegant .data-table td:nth-child(3), .theme-elegant .data-table td:nth-child(5) { white-space: nowrap; }
            
            .theme-elegant .promo-banner { text-align: center; font-size: 14px; color: #d4af37; padding: 12px; border-top: 1px solid rgba(212,175,55,0.3); border-bottom: 1px solid rgba(212,175,55,0.3); margin-bottom: 24px; font-weight: 700; letter-spacing: 1px;}
            
            .theme-elegant .footer-area { margin-top: auto; display: flex; justify-content: space-between; align-items: flex-end;}
            .theme-elegant .info-grid { font-family: system-ui, "Noto Sans TC", sans-serif; font-size: 12px; font-weight: 300; line-height: 1.8; color: #cbd5e1;}
            .theme-elegant .info-grid strong { color: #d4af37; font-weight: 500; font-family: Georgia, serif; letter-spacing: 1px; width: 70px; display: inline-block;}
            
            .theme-elegant .qr-zone { display: flex; gap: 16px; }
            .theme-elegant .qr-item { text-align: center; }
            .theme-elegant .qr-item img { width: 84px; height: 84px; border: 2px solid rgba(212,175,55,0.5); padding: 4px; background: white;}
            .theme-elegant .qr-item span { display: block; font-size: 10px; color: #d4af37; margin-top: 6px; letter-spacing: 1px; font-family: system-ui, sans-serif;}

            .theme-elegant .footer-note { font-family: system-ui, "Noto Sans TC", sans-serif; font-size: 10px; color: #64748b; text-align: center; margin-top: 16px; font-weight: 300;}
        `}} />

        <div className="header">
            <div className="brand">{data.brandText}</div>
            <h1 className="title e-gold">{data.mainTitle}</h1>
        </div>

        <p className="intro">{data.introText}</p>

        <div className="features">
            {data.features.map((feat, idx) => (
                <div className="f-card" key={idx}>
                    <div className="f-num">{['I', 'II', 'III'][idx]}</div>
                    <div className="f-title">{feat.title}</div>
                    <div className="f-desc">{feat.description}</div>
                </div>
            ))}
        </div>

        <div>
            <h2 className="s-title">{data.scheduleTitle}</h2>
            {data.scheduleItems.length === 1 ? (
                <div style={{ textAlign: 'center', margin: '0 32px 24px', padding: '24px', border: '1px solid rgba(212,175,55,0.3)' }}>
                    <div style={{ fontSize: '18px', color: '#f8f9fa', marginBottom: '12px' }}>{data.scheduleItems[0].topic}</div>
                    <div style={{ fontFamily: 'system-ui, "Noto Sans TC", sans-serif', fontSize: '13px', color: '#94a3b8', fontWeight: 300, display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <span>{data.scheduleItems[0].date} {data.scheduleItems[0].week}</span>
                        <span>{data.scheduleItems[0].subject}</span>
                        <span style={{ color: '#d4af37' }}>{data.scheduleItems[0].teacher}</span>
                    </div>
                </div>
            ) : data.scheduleItems.length > 1 ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>Week</th>
                            <th style={{ width: '15%' }}>Date</th>
                            <th style={{ width: '10%' }}>Subject</th>
                            <th style={{ width: '50%' }}>Topic</th>
                            <th style={{ width: '15%' }}>Professor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.scheduleItems.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.week}</td>
                                <td>{item.date}</td>
                                <td>{item.subject}</td>
                                <td>{item.topic}</td>
                                <td className="e-gold">{item.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
        </div>

        {data.promoText && (
            <div className="promo-banner">{data.promoText}</div>
        )}

        <div className="footer-area">
            <div className="info-grid">
                <div><strong>Location</strong> {data.contactInfo.location}</div>
                <div><strong>Schedule</strong> {data.contactInfo.time}</div>
                <div><strong>Tuition</strong> {data.contactInfo.price}</div>
                <div><strong>Admissions</strong> {data.contactInfo.registration}</div>
            </div>
            
            <div className="qr-zone">
                <div className="qr-item">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl)}`} alt="QR" />
                    <span>{data.qrLabel}</span>
                </div>
                {data.qrUrl2 && (
                    <div className="qr-item">
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl2)}`} alt="QR" />
                        <span>{data.qrLabel2}</span>
                    </div>
                )}
            </div>
        </div>
        
        <div className="footer-note">{data.footerNotes}</div>
    </div>
  );
};
