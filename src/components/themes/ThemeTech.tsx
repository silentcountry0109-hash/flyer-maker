import React from 'react';
import type { FlyerData } from '../../types';

interface ThemeProps {
  data: FlyerData;
}

export const ThemeTech: React.FC<ThemeProps> = ({ data }) => {
  return (
    <div className="theme-tech h-full bg-[#050505] text-[#00ffcc] flex flex-col relative shadow-lg print:shadow-none print:bg-white print:text-black" style={{
        fontFamily: '"Fira Code", "Consolas", "Courier New", monospace, "Noto Sans TC", sans-serif',
        width: '210mm',
        height: '297mm',
        padding: '15mm 25mm',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(rgba(0, 255, 204, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 204, 0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
    }}>
        <style dangerouslySetInnerHTML={{__html: `
            .theme-tech, .theme-tech * { box-sizing: border-box; }
            
            /* Print overrides since black background is bad for printers */
            @media print {
                .theme-tech { background-image: none !important; }
                .theme-tech .tech-glow { text-shadow: none !important; color: black !important;}
                .theme-tech .t-card { border-color: #333 !important; background: transparent !important;}
                .theme-tech .data-table th, .theme-tech .data-table td { border-bottom-color: #ccc !important; color: black !important;}
                .theme-tech .btn-cyber { background: #333 !important; color: white !important; box-shadow: none !important; border: none !important;}
                img { filter: invert(0) !important; }
            }

            .theme-tech .tech-glow { text-shadow: 0 0 5px rgba(0, 255, 204, 0.5); }
            .theme-tech .tech-border { border: 1px solid #00ffcc; box-shadow: inset 0 0 10px rgba(0,255,204,0.1); }
            
            .theme-tech .sys-header { border-bottom: 2px dashed #00ffcc; padding-bottom: 16px; margin-bottom: 24px;}
            .theme-tech .brand { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;}
            .theme-tech .brand::before { content: "> SYSTEM.INIT("; }
            .theme-tech .brand::after { content: ");"; }
            .theme-tech .title { font-size: 22px; font-weight: 700; line-height: 1.3; margin: 0; color: #fff;}
            
            .theme-tech p.intro { font-size: 13px; line-height: 1.6; text-align: justify; margin-bottom: 24px; color: #a1a1aa; white-space: pre-wrap; padding-left: 12px; border-left: 2px solid #ff00ff;}
            
            .theme-tech .features { display: flex; gap: 12px; margin-bottom: 24px; }
            .theme-tech .t-card { flex: 1; padding: 12px; border: 1px solid #3f3f46; position: relative; background: rgba(0,0,0,0.4);}
            .theme-tech .t-card::before { content: ""; position: absolute; top: 0; left: 0; width: 8px; height: 8px; border-top: 1px solid #00ffcc; border-left: 1px solid #00ffcc; }
            .theme-tech .t-card::after { content: ""; position: absolute; bottom: 0; right: 0; width: 8px; height: 8px; border-bottom: 1px solid #ff00ff; border-right: 1px solid #ff00ff; }
            .theme-tech .t-title { font-size: 13px; font-weight: 700; margin-bottom: 8px; color: #fff; text-transform: uppercase;}
            .theme-tech .t-desc { font-size: 11.5px; line-height: 1.4; color: #a1a1aa; white-space: pre-wrap; font-family: system-ui, "Noto Sans TC", sans-serif; }
            
            .theme-tech .s-title { font-size: 15px; font-weight: 700; margin-bottom: 16px; color: #ff00ff; text-transform: uppercase;}
            .theme-tech .s-title::before { content: "[ "; color: #3f3f46; }
            .theme-tech .s-title::after { content: " ]"; color: #3f3f46; }
            
            .theme-tech .data-table { width: 100%; border-collapse: collapse; font-family: system-ui, "Noto Sans TC", sans-serif; font-size: 12px; margin-bottom: 24px;}
            .theme-tech .data-table th, .theme-tech .data-table td { padding: 8px 6px; text-align: left; border-bottom: 1px solid #27272a; }
            .theme-tech .data-table th { color: #00ffcc; font-family: monospace; font-size: 10px; font-weight: 400; text-transform: uppercase;}
            .theme-tech .data-table td { color: #d4d4d8; }
            .theme-tech .data-table td:nth-child(1), .theme-tech .data-table td:nth-child(2), .theme-tech .data-table td:nth-child(3), .theme-tech .data-table td:nth-child(5) { white-space: nowrap; }
            
            .theme-tech .btn-cyber { background: transparent; color: #00ffcc; border: 1px solid #00ffcc; padding: 10px 16px; font-size: 13px; font-weight: 700; text-align: center; margin-bottom: 24px; text-transform: uppercase; box-shadow: 0 0 10px rgba(0,255,204,0.2), inset 0 0 10px rgba(0,255,204,0.1); width: 100%; letter-spacing: 2px;}
            
            .theme-tech .footer-sys { display: flex; justify-content: space-between; align-items: flex-end; margin-top: auto; padding: 16px; border: 1px solid #27272a; background: rgba(0,0,0,0.6);}
            .theme-tech .sys-info { list-style: none; padding: 0; margin: 0; font-family: system-ui, "Noto Sans TC", sans-serif; font-size: 12px; color: #a1a1aa; display: grid; gap: 8px;}
            .theme-tech .sys-info strong { color: #ff00ff; font-family: monospace; font-size: 11px; margin-right: 8px;}
            
            .theme-tech .qr-matrix { display: flex; gap: 16px; }
            .theme-tech .qr-node { text-align: center; }
            .theme-tech .qr-node img { width: 80px; height: 80px; border: 1px solid #00ffcc; padding: 4px; background: white;}
            .theme-tech .qr-node span { display: block; font-size: 10px; color: #00ffcc; margin-top: 6px; text-transform: uppercase;}

            .theme-tech .footer-note { font-family: system-ui, "Noto Sans TC", sans-serif; font-size: 10px; color: #52525b; text-align: center; margin-top: 12px;}
        `}} />

        <div className="sys-header">
            <div className="brand tech-glow">{data.brandText}</div>
            <h1 className="title">{data.mainTitle}</h1>
        </div>

        <p className="intro">{data.introText}</p>

        <div className="features">
            {data.features.map((feat, idx) => (
                <div className="t-card" key={idx}>
                    <div className="t-title">{feat.title}</div>
                    <div className="t-desc">{feat.description}</div>
                </div>
            ))}
        </div>

        <div>
            <h2 className="s-title tech-glow">{data.scheduleTitle}</h2>
            {data.scheduleItems.length === 1 ? (
                <div style={{ textShadow: 'none', border: '1px solid #3f3f46', padding: '20px', textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>{data.scheduleItems[0].topic}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '13px', color: '#a1a1aa', fontFamily: 'system-ui, sans-serif' }}>
                        <span><strong style={{color:'#00ffcc', fontFamily:'monospace'}}>DATE:</strong> {data.scheduleItems[0].date} {data.scheduleItems[0].week}</span>
                        <span><strong style={{color:'#00ffcc', fontFamily:'monospace'}}>CLS:</strong> {data.scheduleItems[0].subject}</span>
                        <span><strong style={{color:'#00ffcc', fontFamily:'monospace'}}>USR:</strong> {data.scheduleItems[0].teacher}</span>
                    </div>
                </div>
            ) : data.scheduleItems.length > 1 ? (
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>ID</th>
                            <th style={{ width: '15%' }}>TS</th>
                            <th style={{ width: '10%' }}>MOD</th>
                            <th style={{ width: '50%' }}>DATA_PAYLOAD</th>
                            <th style={{ width: '15%' }}>USR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.scheduleItems.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.week}</td>
                                <td>{item.date}</td>
                                <td>SYS.{item.subject}</td>
                                <td>{item.topic}</td>
                                <td style={{ color: '#ff00ff' }}>@{item.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
        </div>

        {data.promoText && (
            <div className="btn-cyber">{data.promoText}</div>
        )}

        <div className="footer-sys">
            <ul className="sys-info">
                <li><strong>LOC:</strong> {data.contactInfo.location}</li>
                <li><strong>CLK:</strong> {data.contactInfo.time}</li>
                <li><strong>FEE:</strong> {data.contactInfo.price}</li>
                <li><strong>REQ:</strong> {data.contactInfo.registration}</li>
            </ul>
            
            <div className="qr-matrix">
                <div className="qr-node">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl)}`} alt="QR1" />
                    <span>{data.qrLabel}</span>
                </div>
                {data.qrUrl2 && (
                    <div className="qr-node">
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=000000&data=${encodeURIComponent(data.qrUrl2)}`} alt="QR2" />
                        <span>{data.qrLabel2}</span>
                    </div>
                )}
            </div>
        </div>
        
        <div className="footer-note">{data.footerNotes}</div>
    </div>
  );
};
