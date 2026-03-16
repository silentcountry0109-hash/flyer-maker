import React from 'react';
import type { FlyerData } from '../../types';

interface ThemeProps {
  data: FlyerData;
}

export const ThemeFriendly: React.FC<ThemeProps> = ({ data }) => {
  return (
    <div className="theme-friendly h-full bg-[#fdfaf6] text-[#4a4a4a] flex flex-col relative shadow-lg print:shadow-none print:bg-[#fdfaf6]" style={{
        fontFamily: 'system-ui, "Noto Sans TC", "Varela Round", sans-serif',
        width: '210mm',
        height: '297mm',
        padding: '15mm 25mm',
        overflow: 'hidden'
    }}>
        <style dangerouslySetInnerHTML={{__html: `
            .theme-friendly, .theme-friendly * { box-sizing: border-box; }
            .theme-friendly .header-bubble { background: #ffe4e6; border-radius: 20px; padding: 16px 24px; text-align: center; margin-bottom: 16px; box-shadow: 0 4px 16px rgba(225, 29, 72, 0.05);}
            .theme-friendly .brand { font-size: 12px; font-weight: 800; color: #e11d48; margin-bottom: 6px; display: inline-block; background: white; padding: 4px 10px; border-radius: 12px;}
            .theme-friendly .title { font-size: 22px; font-weight: 900; line-height: 1.3; color: #1c1917; }
            
            .theme-friendly p.intro { font-size: 13.5px; line-height: 1.6;text-align: justify; color: #57534e; margin-bottom: 16px; white-space: pre-wrap; font-weight: 500; padding: 0 6px;}
            
            .theme-friendly .cards-container { display: flex; gap: 10px; margin-bottom: 16px; padding: 0 6px;}
            .theme-friendly .cute-card { flex: 1; background: white; border-radius: 16px; padding: 12px 12px; text-align: center; box-shadow: 0 6px 16px rgba(0,0,0,0.03); border: 2px solid white; transition: border 0.3s;}
            .theme-friendly .cute-card:nth-child(1) { border-color: #fca5a5; }
            .theme-friendly .cute-card:nth-child(2) { border-color: #93c5fd; }
            .theme-friendly .cute-card:nth-child(3) { border-color: #fde047; }
            
            .theme-friendly .f-title { font-size: 14px; font-weight: 800; margin-bottom: 4px; color: #1c1917; }
            .theme-friendly .f-desc { font-size: 12px; line-height: 1.4; color: #78716c; white-space: pre-wrap; font-weight: 500;}
            .theme-friendly .icon-circle { width: 32px; height: 32px; border-radius: 50%; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900;}
            
            .theme-friendly .schedule-area { background: white; border-radius: 16px; padding: 16px; box-shadow: 0 6px 16px rgba(0,0,0,0.03); margin-bottom: 16px;}
            .theme-friendly .s-title { font-size: 15px; font-weight: 800; text-align: center; margin-bottom: 12px; color: #1c1917; }
            
            .theme-friendly .data-table { width: 100%; border-collapse: separate; border-spacing: 0 2px; font-size: 11.5px; }
            .theme-friendly .data-table th { padding: 4px 6px; text-align: left; color: #a8a29e; font-weight: 700; border-bottom: 1px solid #f5f5f4; white-space: nowrap;}
            .theme-friendly .data-table td { padding: 4px 6px; background: #fafaf9; }
            .theme-friendly .data-table td:nth-child(1), .theme-friendly .data-table td:nth-child(2), .theme-friendly .data-table td:nth-child(3), .theme-friendly .data-table td:nth-child(5) { white-space: nowrap; }
            .theme-friendly .data-table tr td:first-child { border-radius: 8px 0 0 8px; font-weight: 800; color: #e11d48;}
            .theme-friendly .data-table tr td:last-child { border-radius: 0 8px 8px 0; font-weight: 700;}
            
            .theme-friendly .promo-banner { background: #e11d48; color: white; padding: 8px 12px; border-radius: 12px; font-weight: 800; font-size: 13px; text-align: center; margin-bottom: 12px; margin: 0 6px 16px; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.2);}
            
            .theme-friendly .footer-curve { background: #ffe4e6; border-radius: 24px 24px 0 0; padding: 24px 24px 24px 24px; margin-top: auto; display: flex; justify-content: space-between; align-items: center;}
            .theme-friendly .info-list { list-style: none; padding: 0; margin: 0; }
            .theme-friendly .info-list li { margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #1c1917; display: flex; align-items: center; gap: 8px;}
            .theme-friendly .ico { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: white; border-radius: 50%; color: #e11d48;}
            
            .theme-friendly .qr-box { background: white; padding: 12px; border-radius: 20px; text-align: center; box-shadow: 0 8px 24px rgba(225, 29, 72, 0.1);}
            .theme-friendly .qr-box img { width: 80px; height: 80px; margin-bottom: 8px;}
            .theme-friendly .qr-box span { font-size: 12px; font-weight: 800; color: #e11d48; }

            .theme-friendly .footer-note { text-align: center; font-size: 11px; color: #a8a29e; padding: 16px 0 0; background: #ffe4e6; font-weight: 500;}
        `}} />

        <div className="header-bubble">
            <div className="brand">{data.brandText}</div>
            <h1 className="title">{data.mainTitle}</h1>
        </div>

        <p className="intro">{data.introText}</p>

        <div className="cards-container">
            {data.features.map((feat, idx) => {
                const colors = ['#fca5a5', '#93c5fd', '#fde047'];
                const textColors = ['#991b1b', '#1e3a8a', '#854d0e'];
                return (
                <div className="cute-card" key={idx}>
                    <div className="icon-circle" style={{ background: colors[idx], color: textColors[idx] }}>
                        {idx + 1}
                    </div>
                    <div className="f-title">{feat.title}</div>
                    <div className="f-desc">{feat.description}</div>
                </div>
                )
            })}
        </div>

        <div className="schedule-area">
            <h2 className="s-title">{data.scheduleTitle}</h2>
            {data.scheduleItems.length === 1 ? (
                <div style={{ background: '#fff1f2', padding: '24px', borderRadius: '20px', textAlign: 'center', border: '2px dashed #fca5a5' }}>
                    <div style={{ display: 'inline-block', background: 'white', padding: '6px 16px', borderRadius: '20px', fontWeight: 800, color: '#e11d48', fontSize: '14px', marginBottom: '16px', boxShadow: '0 4px 12px rgba(225,29,72,0.1)' }}>
                        🎈 單堂特別企劃
                    </div>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: '#1c1917', marginBottom: '16px' }}>{data.scheduleItems[0].topic}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '15px' }}>
                        <div style={{ background: 'white', padding: '8px 16px', borderRadius: '12px', fontWeight: 600, color: '#57534e' }}>🗓️ {data.scheduleItems[0].date} {data.scheduleItems[0].week}</div>
                        {data.scheduleItems[0].subject && <div style={{ background: 'white', padding: '8px 16px', borderRadius: '12px', fontWeight: 600, color: '#57534e' }}>📚 {data.scheduleItems[0].subject}</div>}
                        <div style={{ background: 'white', padding: '8px 16px', borderRadius: '12px', fontWeight: 600, color: '#e11d48' }}>👨‍🏫 {data.scheduleItems[0].teacher}</div>
                    </div>
                </div>
            ) : data.scheduleItems.length > 1 ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>週次</th>
                            <th style={{ width: '15%' }}>日期</th>
                            <th style={{ width: '10%' }}>領域</th>
                            <th style={{ width: '50%' }}>課程主題</th>
                            <th style={{ width: '15%' }}>老師</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.scheduleItems.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.week}</td>
                                <td>{item.date}</td>
                                <td><span style={{ background: 'white', padding: '4px 8px', borderRadius: '8px', fontSize: '12px', border: '1px solid #e7e5e4'}}>{item.subject}</span></td>
                                <td style={{ color: '#44403c' }}>{item.topic}</td>
                                <td>{item.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
        </div>

        {data.promoText && (
            <div className="promo-banner">{data.promoText}</div>
        )}

        <div className="footer-curve">
            <ul className="info-list">
                <li><span className="ico">🏠</span> {data.contactInfo.location}</li>
                <li><span className="ico">⏰</span> {data.contactInfo.time}</li>
                <li><span className="ico">💳</span> {data.contactInfo.price}</li>
                <li><span className="ico">✅</span> {data.contactInfo.registration}</li>
            </ul>
            <div style={{ display: 'flex', gap: '12px' }}>
                <div className="qr-box">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl)}`} alt="QR Code" />
                    <br/><span>{data.qrLabel}</span>
                </div>
                {data.qrUrl2 && (
                <div className="qr-box">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl2)}`} alt="QR Code" />
                    <br/><span>{data.qrLabel2}</span>
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
