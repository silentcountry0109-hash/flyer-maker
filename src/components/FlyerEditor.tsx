import React, { useState } from 'react';
import type { FlyerData } from '../types';
import { GoogleGenAI } from '@google/genai';
import { Wand2, Loader2, Printer } from 'lucide-react';

interface EditorProps {
  data: FlyerData;
  onChange: (newData: FlyerData) => void;
  onPrint: () => void;
}

export const FlyerEditor: React.FC<EditorProps> = ({ data, onChange, onPrint }) => {
  const apiKey = 'AIzaSyA0MjQr8mGuXHEekl-4duDyqzkNYor6CMc';
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleChange = (field: keyof FlyerData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handleContactChange = (field: keyof typeof data.contactInfo, value: string) => {
    onChange({
      ...data,
      contactInfo: { ...data.contactInfo, [field]: value }
    });
  };

  const handleEnhanceWithAI = async () => {
    if (!apiKey) {
      alert("請先在下方輸入 Gemini API Key");
      return;
    }

    setIsEnhancing(true);
    try {
      const ai = new GoogleGenAI({ apiKey: apiKey });
      
      const prompt = `
        你是一個頂尖的台灣補習班行銷企劃專家。
        請根據以下的原始傳單資料，幫我優化「引言」和「三大特色」。
        語氣必須：專業、有說服力、直擊家長痛點與學生需求、簡潔有力。
        
        原始引言：
        ${data.introText}
        
        原始特點 1：標題 [${data.features[0].title}]，描述 [${data.features[0].description}]
        原始特點 2：標題 [${data.features[1].title}]，描述 [${data.features[1].description}]
        原始特點 3：標題 [${data.features[2].title}]，描述 [${data.features[2].description}]
        
        請以 JSON 格式回傳，格式如下：
        {
          "introText": "潤飾後的引言 (約 100-150 字，可以分段)",
          "features": [
            { "title": "潤飾後的標題1", "description": "潤飾後的描述1 (約20字內，可使用 \n 換行)" },
            { "title": "潤飾後的標題2", "description": "潤飾後的描述2" },
            { "title": "潤飾後的標題3", "description": "潤飾後的描述3" }
          ]
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        }
      });

      const result = JSON.parse(response.text || '{}');
      if (result.introText && result.features) {
        onChange({
          ...data,
          introText: result.introText,
          features: result.features
        });
      }
    } catch (error) {
      console.error(error);
      alert("AI 潤飾失敗，請檢查 API Key 或網路連線。");
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>宣傳單編輯器</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <select 
            value={data.theme} 
            onChange={(e) => handleChange('theme', e.target.value)}
            style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', flex: 1, fontSize: '14px' }}
          >
            <option value="classic">經典專業 (Classic)</option>
            <option value="minimalist">現代極簡 (Minimalist)</option>
            <option value="bento">便當盒網格 (Bento Grid)</option>
            <option value="accent">深色質感 (High-Contrast)</option>
            <option value="friendly">親和活潑 (Friendly)</option>
            <option value="brutalist">前衛粗獷 (Neo-Brutalism)</option>
            <option value="elegant">英倫學院 (Elegant Academic)</option>
            <option value="tech">科技未來 (Cyber Tech)</option>
          </select>
          <button className="btn-primary" onClick={onPrint} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Printer size={16} /> 列印
          </button>
        </div>
      </div>

      <div className="sidebar-content" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        


        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            onClick={handleEnhanceWithAI} 
            disabled={isEnhancing}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '6px', 
              background: 'linear-gradient(135deg, #a855f7, #ec4899)', 
              color: 'white', padding: '8px 16px', borderRadius: '8px', 
              fontWeight: 600, border: 'none', cursor: isEnhancing ? 'wait' : 'pointer'
            }}
          >
            {isEnhancing ? <Loader2 size={16} className="animate-spin" /> : <Wand2 size={16} />}
            {isEnhancing ? 'AI 撰寫中...' : '🌟 AI 幫我潤飾'}
          </button>
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>頂部品牌文字</label>
          <input type="text" value={data.brandText} onChange={e => handleChange('brandText', e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>宣傳單大標題</label>
          <input type="text" value={data.mainTitle} onChange={e => handleChange('mainTitle', e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>引言與情境 (支援分段)</label>
          <textarea value={data.introText} onChange={e => handleChange('introText', e.target.value)} rows={5} style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', resize: 'vertical'}} />
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>三大特色說明</label>
          {data.features.map((feat, idx) => (
            <div key={idx} style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', marginBottom: '8px', border: '1px solid #e2e8f0' }}>
              <input type="text" value={feat.title} onChange={e => {
                const newFeats = [...data.features];
                newFeats[idx].title = e.target.value;
                handleChange('features', newFeats);
              }} placeholder={`特色 ${idx+1} 標題`} style={{ width: '100%', padding: '6px', marginBottom: '6px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
              <textarea value={feat.description} onChange={e => {
                const newFeats = [...data.features];
                newFeats[idx].description = e.target.value;
                handleChange('features', newFeats);
              }} placeholder={`特色 ${idx+1} 說明`} rows={2} style={{ width: '100%', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '4px', resize: 'vertical'}} />
            </div>
          ))}
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>課程表大標題</label>
          <input type="text" value={data.scheduleTitle} onChange={e => handleChange('scheduleTitle', e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
          
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px', marginTop: '12px' }}>
            課程表內容 <span style={{fontSize: '11px', color:'#ef4444', fontWeight:'normal'}}>(若僅剩 1 堂課，版面會自動轉為「單堂講座」大卡片呈現)</span>
          </label>
          {data.scheduleItems.map((item, idx) => (
            <div key={idx} style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', marginBottom: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <input type="text" value={item.week} onChange={e => { const newSch = [...data.scheduleItems]; newSch[idx].week = e.target.value; handleChange('scheduleItems', newSch); }} placeholder="週次/場次" style={{ flex: 1, padding: '6px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
                <input type="text" value={item.date} onChange={e => { const newSch = [...data.scheduleItems]; newSch[idx].date = e.target.value; handleChange('scheduleItems', newSch); }} placeholder="日期/時間" style={{ flex: 1, padding: '6px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <input type="text" value={item.subject} onChange={e => { const newSch = [...data.scheduleItems]; newSch[idx].subject = e.target.value; handleChange('scheduleItems', newSch); }} placeholder="科目/類別" style={{ flex: 1, padding: '6px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
                <input type="text" value={item.teacher} onChange={e => { const newSch = [...data.scheduleItems]; newSch[idx].teacher = e.target.value; handleChange('scheduleItems', newSch); }} placeholder="授課老師" style={{ flex: 1, padding: '6px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
              </div>
              <input type="text" value={item.topic} onChange={e => { const newSch = [...data.scheduleItems]; newSch[idx].topic = e.target.value; handleChange('scheduleItems', newSch); }} placeholder="主題與重點" style={{ width: '100%', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
              <button onClick={() => { const newSch = data.scheduleItems.filter((_, i) => i !== idx); handleChange('scheduleItems', newSch); }} style={{ alignSelf: 'flex-end', padding: '4px 8px', background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '4px', fontSize: '12px', cursor: 'pointer', marginTop: '4px' }}>刪除此堂</button>
            </div>
          ))}
          <button onClick={() => { handleChange('scheduleItems', [...data.scheduleItems, { week: '', date: '', subject: '', topic: '', teacher: '' }]); }} style={{ width: '100%', padding: '8px', background: '#f1f5f9', color: '#475569', border: '1px dashed #cbd5e1', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', marginTop: '4px' }}>＋ 新增一堂課</button>
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>行銷反白口號 (留空則隱藏)</label>
          <input type="text" value={data.promoText} onChange={e => handleChange('promoText', e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>聯絡方式</label>
          <input type="text" value={data.contactInfo.location} onChange={e => handleContactChange('location', e.target.value)} placeholder="上課地點" style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
          <input type="text" value={data.contactInfo.time} onChange={e => handleContactChange('time', e.target.value)} placeholder="上課時間" style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
          <input type="text" value={data.contactInfo.price} onChange={e => handleContactChange('price', e.target.value)} placeholder="費用" style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
          <input type="text" value={data.contactInfo.registration} onChange={e => handleContactChange('registration', e.target.value)} placeholder="報名方式說明" style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
        </div>

        <div className="form-group">
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>主 QR Code 設定</label>
            <input type="text" value={data.qrUrl} onChange={e => handleChange('qrUrl', e.target.value)} placeholder="輸入網址 (如 https://...)" style={{ width: '100%', padding: '8px', marginBottom: '4px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
            <input type="text" value={data.qrLabel} onChange={e => handleChange('qrLabel', e.target.value)} placeholder="QR Code 說明 (如 線上報名表單)" style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
        </div>

        <div className="form-group">
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>第二組 QR Code (選填)</label>
            <input type="text" value={data.qrUrl2 || ''} onChange={e => handleChange('qrUrl2', e.target.value)} placeholder="第二組網址 (留空則隱藏)" style={{ width: '100%', padding: '8px', marginBottom: '4px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
            <input type="text" value={data.qrLabel2 || ''} onChange={e => handleChange('qrLabel2', e.target.value)} placeholder="第二組 QR Code 說明 (如 官方 LINE)" style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>頁尾附註 (含分校與電話)</label>
          <input type="text" value={data.footerNotes} onChange={e => handleChange('footerNotes', e.target.value)} placeholder="頁尾附註資訊" style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px'}} />
        </div>

      </div>
    </div>
  );
};
