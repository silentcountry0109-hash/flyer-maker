import React from 'react';
import type { FlyerData } from '../../types';

interface ThemeProps {
  data: FlyerData;
}

export const ThemeClassic: React.FC<ThemeProps> = ({ data }) => {
  return (
    <div className="theme-classic h-full bg-white text-[#1A1A1A] flex flex-col relative shadow-lg print:shadow-none" style={{
        fontFamily: 'system-ui, "Noto Sans TC", sans-serif',
        width: '210mm',
        height: '297mm',
        padding: '15mm 25mm',
        overflow: 'hidden'
    }}>
        {/* Style overrides string included inline since React doesn't support global style injection easily here without CSS Modules. */}
        <style dangerouslySetInnerHTML={{__html: `
            .theme-classic, .theme-classic * { box-sizing: border-box; }
            .theme-classic .brand-logo { 
                background: #D12E35; 
                color: white; 
                padding: 4px 8px; 
                font-weight: 900; 
                letter-spacing: 2px;
                font-size: 18px;
                display: inline-block;
                border-radius: 2px;
                margin-bottom: 12px;
            }
            .theme-classic .title { font-size: 24px; font-weight: 700; line-height: 1.3; margin-bottom: 12px; text-align: center; }
            .theme-classic p.intro { font-size: 13px; line-height: 1.7; text-align: justify; color: #475569; margin-bottom: 20px; white-space: pre-wrap; }
            .theme-classic .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; }
            .theme-classic .feature-title { font-size: 15px; font-weight: 700; text-align: center; margin-bottom: 6px; }
            .theme-classic .feature-icon-wrapper { margin: 6px auto; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: #f8fafc; border-radius: 50%; }
            .theme-classic .feature-desc { font-size: 12.5px; line-height: 1.5; color: #475569; text-align: center; white-space: pre-wrap;}
            .theme-classic .data-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 13px; }
            .theme-classic .data-table th, .theme-classic .data-table td { border: 1px solid #1A1A1A; padding: 6px; text-align: center; }
            .theme-classic .data-table th { background-color: #1A1A1A; color: white; font-weight: 500; }
            .theme-classic .promo-banner { background: #D12E35; color: white; text-align: center; padding: 6px 12px; font-size: 14px; font-weight: 700; margin-bottom: 16px; }
            .theme-classic .info-list { list-style: none; padding: 0; margin: 0; width: 75%; }
            .theme-classic .info-list li { position: relative; padding-left: 20px; line-height: 1.6; font-size: 13.5px; margin-bottom: 8px;}
            .theme-classic .info-list li::before { content: "✦"; position: absolute; left: 0; top: 0px; color: #1A1A1A; font-weight: 900; }
        `}} />

        {/* 頁首與標題 */}
        <header style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div className="brand-logo">{data.brandText}</div>
            <h1 className="title">{data.mainTitle}</h1>
        </header>

        {/* 引言 */}
        <p className="intro">{data.introText}</p>

        {/* 三欄特色亮點 */}
        <div className="features-grid">
            {data.features.map((feat, idx) => (
                <div key={idx}>
                    <div className="feature-title">{feat.title}</div>
                    <div className="feature-icon-wrapper">
                        {/* 隨機挑選不同的通用形狀，或是使用 SVG */}
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            {idx === 0 && <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></>}
                            {idx === 1 && <><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></>}
                            {idx === 2 && <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></>}
                        </svg>
                    </div>
                    <div className="feature-desc">{feat.description}</div>
                </div>
            ))}
        </div>

        {/* 課程表格 / 單堂講座 */}
        {data.scheduleItems.length === 1 ? (
            <div style={{ margin: '0 auto 24px auto', padding: '24px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#D12E35', marginBottom: '16px' }}>{data.scheduleTitle}</h2>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>
                    {data.scheduleItems[0].date} {data.scheduleItems[0].week && ` | ${data.scheduleItems[0].week}`} {data.scheduleItems[0].subject && ` | ${data.scheduleItems[0].subject}`}
                </div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{data.scheduleItems[0].topic}</div>
                <div style={{ fontSize: '16px', color: '#475569', fontWeight: 500 }}>主講人：{data.scheduleItems[0].teacher}</div>
            </div>
        ) : data.scheduleItems.length > 1 ? (
            <>
                <h2 style={{ fontSize: '18px', fontWeight: 700, textAlign: 'center', marginBottom: '16px' }}>{data.scheduleTitle}</h2>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>週次</th>
                            <th style={{ width: '15%' }}>日期</th>
                            <th style={{ width: '10%' }}>科目</th>
                            <th style={{ width: '50%' }}>核心考點與奪分重點</th>
                            <th style={{ width: '15%' }}>授課師資</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.scheduleItems.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.week}</td>
                                <td>{item.date}</td>
                                <td>{item.subject}</td>
                                <td>{item.topic}</td>
                                <td>{item.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        ) : null}

        {/* 報名資訊反白 */}
        {data.promoText && (
            <div className="promo-banner">
                {data.promoText}
            </div>
        )}

        {/* 頁尾聯絡與 QR Code */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '16px' }}>
            <ul className="info-list">
                <li><strong>上課分校｜</strong>{data.contactInfo.location}</li>
                <li><strong>上課時間｜</strong>{data.contactInfo.time}</li>
                <li><strong>課程費用｜</strong>{data.contactInfo.price}</li>
                <li><strong>報名方式｜</strong>{data.contactInfo.registration}</li>
            </ul>
            <div style={{ textAlign: 'right', display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px', fontWeight: 700 }}>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl)}`} alt="QR Code" style={{ width: '90px', height: '90px', marginBottom: '6px' }} />
                    <span>{data.qrLabel}</span>
                </div>
                {data.qrUrl2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px', fontWeight: 700 }}>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl2)}`} alt="QR Code" style={{ width: '90px', height: '90px', marginBottom: '6px' }} />
                        <span>{data.qrLabel2}</span>
                    </div>
                )}
            </div>
        </div>

        <div style={{ textAlign: 'center', fontSize: '11px', color: '#475569', marginTop: '16px' }}>
            {data.footerNotes}
        </div>
    </div>
  );
};
