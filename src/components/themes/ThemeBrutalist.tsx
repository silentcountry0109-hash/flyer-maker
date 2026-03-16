import React from 'react';
import type { FlyerData } from '../../types';

interface ThemeProps {
  data: FlyerData;
}

export const ThemeBrutalist: React.FC<ThemeProps> = ({ data }) => {
  return (
    <div className="theme-brutalist h-full bg-[#fdf2f8] text-black flex flex-col relative shadow-[8px_8px_0px_#000] border-4 border-black print:shadow-none print:border-none" style={{
        fontFamily: '"Arial Black", Impact, "Noto Sans TC", sans-serif',
        width: '210mm',
        height: '297mm',
        padding: '15mm 25mm',
        overflow: 'hidden'
    }}>
        <style dangerouslySetInnerHTML={{__html: `
            .theme-brutalist, .theme-brutalist * { box-sizing: border-box; }
            .theme-brutalist .brutal-box { border: 4px solid black; background: white; box-shadow: 4px 4px 0px black; padding: 16px; margin-bottom: 20px;}
            
            .theme-brutalist .hero-box { background: #fef08a; display: flex; flex-direction: column; align-items: center; border-radius: 8px;}
            .theme-brutalist .brand-tag { background: black; color: white; padding: 4px 12px; font-weight: 900; font-family: monospace; font-size: 14px; text-transform: uppercase; margin-bottom: 12px; transform: rotate(-2deg); display: inline-block;}
            .theme-brutalist .main-title { font-size: 26px; font-weight: 900; line-height: 1.2; text-align: center; text-transform: uppercase; letter-spacing: -1px; margin: 0;}
            
            .theme-brutalist p.intro { font-size: 14px; line-height: 1.6; font-family: system-ui, "Noto Sans TC", sans-serif; font-weight: 700; background: white; border: 3px solid black; padding: 12px; box-shadow: 4px 4px 0px #f472b6; margin-bottom: 20px; white-space: pre-wrap; text-align: justify;}
            
            .theme-brutalist .features-grid { display: flex; gap: 12px; margin-bottom: 20px; }
            .theme-brutalist .f-card { flex: 1; border: 3px solid black; background: #67e8f9; padding: 12px; box-shadow: 4px 4px 0px black; transform: translateY(0); transition: transform 0.1s;}
            .theme-brutalist .f-card:nth-child(2) { background: #bbf7d0; box-shadow: 4px 4px 0px #ef4444; }
            .theme-brutalist .f-card:nth-child(3) { background: #fef08a; box-shadow: 4px 4px 0px #3b82f6; }
            .theme-brutalist .f-title { font-size: 16px; font-weight: 900; border-bottom: 3px solid black; padding-bottom: 4px; margin-bottom: 8px; text-transform: uppercase;}
            .theme-brutalist .f-desc { font-size: 13px; font-family: system-ui, "Noto Sans TC", sans-serif; font-weight: 700; white-space: pre-wrap; line-height: 1.4;}
            
            .theme-brutalist .schedule-header { background: black; color: white; padding: 8px 16px; font-weight: 900; font-size: 16px; display: inline-block; margin-bottom: 12px; text-transform: uppercase; transform: skewX(-5deg);}
            .theme-brutalist .data-table { width: 100%; border-collapse: collapse; font-family: system-ui, "Noto Sans TC", sans-serif; font-size: 13px; font-weight: 700; border: 3px solid black;}
            .theme-brutalist .data-table th, .theme-brutalist .data-table td { border: 2px solid black; padding: 6px 8px; text-align: left; }
            .theme-brutalist .data-table th { background: #d8b4fe; font-weight: 900; text-transform: uppercase; white-space: nowrap;}
            .theme-brutalist .data-table tr:nth-child(even) td { background: #f1f5f9; }
            .theme-brutalist .data-table td:nth-child(1), .theme-brutalist .data-table td:nth-child(2), .theme-brutalist .data-table td:nth-child(3), .theme-brutalist .data-table td:nth-child(5) { white-space: nowrap; }
            
            .theme-brutalist .promo-banner { background: #ef4444; color: white; border: 3px solid black; box-shadow: 4px 4px 0px black; padding: 10px 16px; font-size: 16px; font-weight: 900; text-align: center; margin-bottom: 24px; text-transform: uppercase;}
            
            .theme-brutalist .footer-zone { padding: 16px; background: white; border: 4px solid black; box-shadow: 6px 6px 0px #14b8a6; display: flex; justify-content: space-between; align-items: flex-start; margin-top: auto;}
            .theme-brutalist .contact-table { font-family: system-ui, "Noto Sans TC", sans-serif; font-size: 13px; font-weight: 700; border-collapse: separate; border-spacing: 0 8px;}
            .theme-brutalist .contact-table td { vertical-align: top; }
            .theme-brutalist .contact-label { background: black; color: white; padding: 2px 8px; margin-right: 8px; border-radius: 4px; display: inline-block;}
            
            .theme-brutalist .qr-flex { display: flex; gap: 16px; align-items: flex-end;}
            .theme-brutalist .qr-block { text-align: center;}
            .theme-brutalist .qr-block img { width: 80px; height: 80px; border: 3px solid black; box-shadow: 3px 3px 0px black;}
            .theme-brutalist .qr-block span { display: block; background: black; color: white; font-size: 11px; padding: 2px 4px; margin-top: 4px; font-weight: 900;}
            
            .theme-brutalist .footer-note { font-family: system-ui, "Noto Sans TC", sans-serif; font-size: 10px; font-weight: 700; text-align: center; margin-top: 12px; color: #475569;}
        `}} />

        <div className="brutal-box hero-box">
            <div className="brand-tag">&gt;&gt;&gt; {data.brandText}</div>
            <h1 className="main-title">{data.mainTitle}</h1>
        </div>

        <p className="intro">
            {data.introText}
        </p>

        <div className="features-grid">
            {data.features.map((feat, idx) => (
                <div className="f-card" key={idx}>
                    <div className="f-title">{feat.title}</div>
                    <div className="f-desc">{feat.description}</div>
                </div>
            ))}
        </div>

        <div style={{ marginBottom: '20px' }}>
            <div className="schedule-header">{data.scheduleTitle}</div>
            {data.scheduleItems.length === 1 ? (
                <div style={{ background: '#e2e8f0', border: '3px solid black', padding: '16px', boxShadow: '4px 4px 0px black' }}>
                    <div style={{ fontSize: '20px', fontWeight: 900, marginBottom: '12px' }}>{data.scheduleItems[0].topic}</div>
                    <div style={{ display: 'flex', gap: '16px', fontFamily: 'system-ui, "Noto Sans TC", sans-serif', fontWeight: 700, fontSize: '14px' }}>
                        <div><span style={{background: 'black', color: 'white', padding: '2px 6px', marginRight: '4px'}}>DATE</span>{data.scheduleItems[0].date} {data.scheduleItems[0].week}</div>
                        <div><span style={{background: 'black', color: 'white', padding: '2px 6px', marginRight: '4px'}}>TYPE</span>{data.scheduleItems[0].subject}</div>
                        <div><span style={{background: 'black', color: 'white', padding: '2px 6px', marginRight: '4px'}}>BY</span>{data.scheduleItems[0].teacher}</div>
                    </div>
                </div>
            ) : data.scheduleItems.length > 1 ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>週次</th>
                            <th style={{ width: '15%' }}>日期</th>
                            <th style={{ width: '10%' }}>領域</th>
                            <th style={{ width: '50%' }}>強效重點</th>
                            <th style={{ width: '15%' }}>師資</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.scheduleItems.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.week}</td>
                                <td>{item.date}</td>
                                <td><span style={{border: '1px solid black', padding: '2px 4px', background: 'white'}}>{item.subject}</span></td>
                                <td>{item.topic}</td>
                                <td>{item.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
        </div>

        {data.promoText && (
            <div className="promo-banner">
                {data.promoText}
            </div>
        )}

        <div className="footer-zone">
            <table className="contact-table">
                <tbody>
                    <tr><td><span className="contact-label">基地</span></td><td>{data.contactInfo.location}</td></tr>
                    <tr><td><span className="contact-label">時間</span></td><td>{data.contactInfo.time}</td></tr>
                    <tr><td><span className="contact-label">費用</span></td><td>{data.contactInfo.price}</td></tr>
                    <tr><td><span className="contact-label">報名</span></td><td>{data.contactInfo.registration}</td></tr>
                </tbody>
            </table>
            
            <div className="qr-flex">
                <div className="qr-block">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl)}`} alt="QR" />
                    <span>{data.qrLabel}</span>
                </div>
                {data.qrUrl2 && (
                <div className="qr-block">
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
