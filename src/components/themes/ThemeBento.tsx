import React from 'react';
import type { FlyerData } from '../../types';

interface ThemeProps {
  data: FlyerData;
}

export const ThemeBento: React.FC<ThemeProps> = ({ data }) => {
  return (
    <div className="theme-bento h-full bg-[#f1f5f9] text-[#1e293b] flex flex-col relative shadow-lg print:shadow-none print:bg-[#f1f5f9]" style={{
        fontFamily: 'system-ui, "Noto Sans TC", sans-serif',
        width: '210mm',
        height: '297mm',
        padding: '15mm 25mm',
        overflow: 'hidden'
    }}>
        <style dangerouslySetInnerHTML={{__html: `
            .theme-bento, .theme-bento * { box-sizing: border-box; }
            .theme-bento .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); grid-auto-rows: minmax(min-content, max-content); gap: 10px; height: 100%; }
            .theme-bento .bento-box { background: white; border-radius: 16px; padding: 14px; box-shadow: 0 4px 16px rgba(0,0,0,0.03); display: flex; flex-direction: column; }
            
            /* Box Assignments */
            .theme-bento .box-header { grid-column: span 12; justify-content: center; }
            .theme-bento .box-intro { grid-column: span 12; padding: 16px 20px; }
            .theme-bento .box-feature-1 { grid-column: span 4; background: #D12E35; color: white;}
            .theme-bento .box-feature-2 { grid-column: span 4; }
            .theme-bento .box-feature-3 { grid-column: span 4; background: #1e293b; color: white;}
            .theme-bento .box-schedule { grid-column: span 8; }
            .theme-bento .box-qr { grid-column: span 4; align-items: center; justify-content: center; }
            .theme-bento .box-promo { grid-column: span 12; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; border-radius: 12px; padding: 12px 20px; text-align: center; }
            .theme-bento .box-footer { grid-column: span 12; background: transparent; padding: 0; box-shadow: none; flex-direction: row; justify-content: space-between; align-items: flex-end; }

            .theme-bento .brand { font-size: 12px; font-weight: 800; letter-spacing: 1px; color: #D12E35; margin-bottom: 4px; justify-content: center; display: flex; align-items: center; gap: 8px;}
            .theme-bento .brand::before, .theme-bento .brand::after { content: ""; display: block; width: 16px; height: 1px; background: #D12E35; }
            .theme-bento .title { font-size: 20px; font-weight: 900; line-height: 1.2; text-align: center; color: #0f172a; }
            .theme-bento p.intro { font-size: 12px; line-height: 1.5;text-align: justify; margin: 0; }
            
            .theme-bento .f-title { font-size: 13.5px; font-weight: 900; margin-bottom: 4px; }
            .theme-bento .f-desc { font-size: 12px; line-height: 1.4; opacity: 0.9; white-space: pre-wrap; }
            .theme-bento .f-icon { width: 28px; height: 28px; border-radius: 8px; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
            
            .theme-bento .s-title { font-size: 14px; font-weight: 800; margin-bottom: 6px; color: #0f172a; }
            .theme-bento .data-table { width: 100%; border-collapse: collapse; font-size: 11px; }
            .theme-bento .data-table th, .theme-bento .data-table td { padding: 4px; text-align: left; border-bottom: 1px dashed #e2e8f0; }
            .theme-bento .data-table th { color: #64748b; font-weight: 600; padding-top: 0; border-bottom-style: solid; white-space: nowrap;}
            .theme-bento .data-table td:nth-child(1), .theme-bento .data-table td:nth-child(2), .theme-bento .data-table td:nth-child(3), .theme-bento .data-table td:nth-child(5) { white-space: nowrap; }
            .theme-bento .data-table tr:last-child td { border-bottom: none; padding-bottom: 0; }
            
            .theme-bento .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 70%; }
            .theme-bento .info-item { display: flex; flex-direction: column; gap: 4px; }
            .theme-bento .info-lbl { font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; }
            .theme-bento .info-val { font-size: 13px; font-weight: 700; color: #0f172a; }
        `}} />

        <div className="bento-grid">
            <div className="bento-box box-header">
                <div className="brand">{data.brandText}</div>
                <h1 className="title">{data.mainTitle}</h1>
            </div>

            <div className="bento-box box-intro">
                <p className="intro">{data.introText}</p>
            </div>

            {data.features.map((feat, idx) => {

                const boxClass = `box-feature-${idx + 1}`;
                return (
                    <div className={`bento-box ${boxClass}`} key={idx}>
                        <div className="f-icon" style={{ background: idx === 1 ? '#f1f5f9' : 'rgba(255,255,255,0.2)'}}>
                            <span style={{ fontSize: '18px', fontWeight: 900, color: idx === 1 ? '#D12E35' : 'white' }}>0{idx+1}</span>
                        </div>
                        <div className="f-title">{feat.title}</div>
                        <div className="f-desc">{feat.description}</div>
                    </div>
                )
            })}

            <div className="bento-box box-schedule">
                {data.scheduleItems.length === 1 ? (
                    <div style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontSize: '12px', background: '#e2e8f0', padding: '4px 12px', borderRadius: '12px', display: 'inline-block', margin: '0 auto 12px auto', fontWeight: 700, color: '#475569' }}>特別講座 / 單堂講堂</div>
                        <h2 className="s-title" style={{ marginBottom: '8px', fontSize: '22px' }}>{data.scheduleTitle}</h2>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: '#D12E35', margin: '16px 0' }}>{data.scheduleItems[0].topic}</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '14px', color: '#64748b', fontWeight: 600 }}>
                            <div style={{ background: '#f8fafc', padding: '8px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>📅 {data.scheduleItems[0].date} {data.scheduleItems[0].week}</div>
                            {data.scheduleItems[0].subject && <div style={{ background: '#f8fafc', padding: '8px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>📖 {data.scheduleItems[0].subject}</div>}
                            <div style={{ background: '#f8fafc', padding: '8px 16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>🧑‍🏫 {data.scheduleItems[0].teacher}</div>
                        </div>
                    </div>
                ) : data.scheduleItems.length > 1 ? (
                    <>
                        <h2 className="s-title">{data.scheduleTitle}</h2>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }}>週次</th>
                                    <th style={{ width: '15%' }}>日期</th>
                                    <th style={{ width: '10%' }}>領域</th>
                                    <th style={{ width: '50%' }}>奪分重點</th>
                                    <th style={{ width: '15%' }}>名師</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.scheduleItems.map((item, idx) => (
                                    <tr key={idx}>
                                        <td style={{ fontWeight: 700 }}>{item.week} <br/><span style={{ fontSize: '11px', color: '#64748b', fontWeight: 500}}>{item.date}</span></td>
                                        <td><span style={{ background: '#f8fafc', padding: '4px 8px', borderRadius: '6px', fontWeight: 600, border: '1px solid #e2e8f0' }}>{item.subject}</span></td>
                                        <td style={{ fontWeight: 500 }}>{item.topic}</td>
                                        <td style={{ color: '#D12E35', fontWeight: 700 }}>{item.teacher}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : null}
            </div>

            <div className="bento-box box-qr" style={{ padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', marginBottom: data.qrUrl2 ? '8px' : '16px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 900, color: '#0f172a', marginBottom: '2px' }}>報名入口</div>
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>{data.qrLabel}</div>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl)}`} alt="QR Code" style={{ width: data.qrUrl2 ? '70px' : '100px', height: data.qrUrl2 ? '70px' : '100px', borderRadius: '12px', border: '4px solid #f8fafc' }} />
                    </div>
                    {data.qrUrl2 && (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>{data.qrLabel2}</div>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl2)}`} alt="QR Code" style={{ width: '70px', height: '70px', borderRadius: '12px', border: '4px solid #f8fafc' }} />
                    </div>
                    )}
                </div>
            </div>

            {data.promoText && (
                <div className="bento-box box-promo">
                    <span style={{ fontWeight: 800, letterSpacing: '0.5px' }}>{data.promoText}</span>
                </div>
            )}

            <div className="bento-box box-footer">
                <div className="info-grid">
                    <div className="info-item"><span className="info-lbl">上課分校 Location</span><span className="info-val">{data.contactInfo.location}</span></div>
                    <div className="info-item"><span className="info-lbl">上課時間 Time</span><span className="info-val">{data.contactInfo.time}</span></div>
                    <div className="info-item"><span className="info-lbl">課程費用 Price</span><span className="info-val">{data.contactInfo.price}</span></div>
                    <div className="info-item"><span className="info-lbl">報名方式 Register</span><span className="info-val">{data.contactInfo.registration}</span></div>
                </div>
                <div style={{ fontSize: '10px', color: '#94a3b8', textAlign: 'right', maxWidth: '200px' }}>
                    {data.footerNotes}
                </div>
            </div>
        </div>
    </div>
  );
};
