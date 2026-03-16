import React from 'react';
import type { FlyerData } from '../../types';

interface ThemeProps {
  data: FlyerData;
}

export const ThemeAccent: React.FC<ThemeProps> = ({ data }) => {
  return (
    <div className="theme-accent h-full bg-white text-[#1A1A1A] flex flex-col relative shadow-lg print:shadow-none" style={{
        fontFamily: 'system-ui, "Noto Sans TC", sans-serif',
        width: '210mm',
        height: '297mm',
        padding: '15mm 25mm',
        overflow: 'hidden'
    }}>
        <style dangerouslySetInnerHTML={{__html: `
            .theme-accent, .theme-accent * { box-sizing: border-box; }
            .theme-accent .top-hero { background: #1e293b; color: white; padding: 24px 24px 32px; position: relative; text-align: center;}
            .theme-accent .top-hero::after { content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 6px; background: #D12E35; }
            
            .theme-accent .brand { font-size: 12px; font-weight: 700; opacity: 0.8; margin-bottom: 8px; letter-spacing: 2px; }
            .theme-accent .title { font-size: 24px; font-weight: 900; line-height: 1.2; }
            
            .theme-accent .content-area { padding: 16px; flex: 1; display: flex; flex-direction: column;}
            
            .theme-accent p.intro { font-size: 12.5px; line-height: 1.5;text-align: justify; color: #334155; margin-bottom: 16px; padding-left: 12px; border-left: 4px solid #D12E35; white-space: pre-wrap; font-weight: 500;}
            
            .theme-accent .features-row { display: flex; gap: 8px; margin-bottom: 16px; }
            .theme-accent .feature-card { flex: 1; background: #f8fafc; padding: 12px 14px; border-radius: 8px; border-top: 3px solid #1e293b; }
            .theme-accent .f-title { font-size: 14px; font-weight: 800; margin-bottom: 6px; color: #0f172a; }
            .theme-accent .f-desc { font-size: 12px; line-height: 1.4; color: #64748b; white-space: pre-wrap; }
            
            .theme-accent .section-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
            .theme-accent .s-title { font-size: 16px; font-weight: 800; color: #1e293b; margin: 0; }
            .theme-accent .s-line { flex: 1; height: 1px; background: #e2e8f0; }

            .theme-accent .data-table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: 11.5px; margin-bottom: 16px;}
            .theme-accent .data-table th, .theme-accent .data-table td { padding: 4px 8px; text-align: left; border-bottom: 1px solid #e2e8f0; }
            .theme-accent .data-table th { background: #f1f5f9; color: #334155; font-weight: 700; border-bottom: 2px solid #cbd5e1; white-space: nowrap;}
            .theme-accent .data-table tr:nth-child(even) td { background: #fafafa; }
            .theme-accent .data-table td { color: #0f172a; }
            .theme-accent .data-table td:nth-child(1), .theme-accent .data-table td:nth-child(2), .theme-accent .data-table td:nth-child(3), .theme-accent .data-table td:nth-child(5) { white-space: nowrap; }
            .theme-accent .teacher-badge { background: rgba(209, 46, 53, 0.1); color: #D12E35; padding: 4px 6px; border-radius: 4px; font-weight: 700; font-size: 11px;}

            .theme-accent .bottom-area { background: #f8fafc; padding: 20px 24px; margin-top: auto; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;}
            .theme-accent .contact-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 75%; }
            .theme-accent .c-item { display: flex; gap: 8px; align-items: flex-start;}
            .theme-accent .c-icon { width: 24px; height: 24px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; color: #64748b; flex-shrink: 0;}
            .theme-accent .c-text { font-size: 13px; line-height: 1.5; color: #334155; font-weight: 500;}
            
            .theme-accent .qr-wrapper { text-align: center; }
            .theme-accent .qr-wrapper img { width: 84px; height: 84px; margin-bottom: 8px; border: 1px solid #cbd5e1; border-radius: 4px; padding: 4px; background: white;}
            .theme-accent .qr-lbl { font-size: 11px; font-weight: 700; color: #1e293b; letter-spacing: 1px; }

            .theme-accent .footer-note { text-align: center; font-size: 11px; color: #94a3b8; padding: 16px 40px; background: white;}
            .theme-accent .promo-banner { background: #D12E35; color: white; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 15px; margin-bottom: 32px; box-shadow: 0 4px 12px rgba(209,46,53,0.2); display: inline-block;}
        `}} />

        <div className="top-hero">
            <div className="brand">{data.brandText}</div>
            <h1 className="title">{data.mainTitle}</h1>
        </div>

        <div className="content-area">
            <p className="intro">{data.introText}</p>

            <div className="features-row">
                {data.features.map((feat, idx) => (
                    <div className="feature-card" key={idx}>
                        <div className="f-title">{feat.title}</div>
                        <div className="f-desc">{feat.description}</div>
                    </div>
                ))}
            </div>

            <div className="section-header">
                <h2 className="s-title">{data.scheduleTitle}</h2>
                <div className="s-line"></div>
            </div>

            {data.scheduleItems.length === 1 ? (
                <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '6px solid #1e293b', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ background: '#1e293b', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, letterSpacing: '1px' }}>{data.scheduleItems[0].date}</div>
                        {data.scheduleItems[0].week && <div style={{ color: '#64748b', fontWeight: 600 }}>{data.scheduleItems[0].week}</div>}
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a', marginBottom: '16px' }}>{data.scheduleItems[0].topic}</div>
                    <div style={{ display: 'flex', gap: '24px', fontSize: '15px' }}>
                        {data.scheduleItems[0].subject && <div><strong style={{ color: '#334155' }}>📍 領域：</strong> <span style={{ color: '#0f172a', fontWeight: 600 }}>{data.scheduleItems[0].subject}</span></div>}
                        <div><strong style={{ color: '#334155' }}>🧑‍🏫 主講：</strong> <span className="teacher-badge">{data.scheduleItems[0].teacher}</span></div>
                    </div>
                </div>
            ) : data.scheduleItems.length > 1 ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>週次</th>
                            <th style={{ width: '15%' }}>日期</th>
                            <th style={{ width: '10%' }}>科目</th>
                            <th style={{ width: '50%' }}>課程重點</th>
                            <th style={{ width: '15%' }}>名師</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.scheduleItems.map((item, idx) => (
                            <tr key={idx}>
                                <td style={{ fontWeight: 700 }}>{item.week}</td>
                                <td style={{ color: '#64748b' }}>{item.date}</td>
                                <td style={{ fontWeight: 600 }}>{item.subject}</td>
                                <td>{item.topic}</td>
                                <td><span className="teacher-badge">{item.teacher}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}

            {data.promoText && (
                <div style={{ textAlign: 'center' }}>
                    <div className="promo-banner">{data.promoText}</div>
                </div>
            )}
        </div>

        <div className="bottom-area">
            <ul className="contact-list">
                <li className="c-item"><div className="c-icon">📍</div><div className="c-text"><strong>分校地點</strong><br/>{data.contactInfo.location}</div></li>
                <li className="c-item"><div className="c-icon">⏰</div><div className="c-text"><strong>上課時間</strong><br/>{data.contactInfo.time}</div></li>
                <li className="c-item"><div className="c-icon">💰</div><div className="c-text"><strong>費用方案</strong><br/>{data.contactInfo.price}</div></li>
                <li className="c-item"><div className="c-icon">📝</div><div className="c-text"><strong>報名方式</strong><br/>{data.contactInfo.registration}</div></li>
            </ul>
            <div style={{ display: 'flex', gap: '16px' }}>
                <div className="qr-wrapper">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl)}`} alt="QR Code" />
                    <div className="qr-lbl">{data.qrLabel}</div>
                </div>
                {data.qrUrl2 && (
                    <div className="qr-wrapper">
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl2)}`} alt="QR Code" />
                        <div className="qr-lbl">{data.qrLabel2}</div>
                    </div>
                )}
            </div>
        </div>

        <div className="footer-note">
            {data.footerNotes}
        </div>
    </div>
  );
};
