import React from 'react';
import type { FlyerData } from '../types'; // Trigger HMR
import { ThemeClassic } from './themes/ThemeClassic';
import { ThemeMinimalist } from './themes/ThemeMinimalist';
import { ThemeBento } from './themes/ThemeBento';
import { ThemeAccent } from './themes/ThemeAccent';
import { ThemeFriendly } from './themes/ThemeFriendly';
import { ThemeBrutalist } from './themes/ThemeBrutalist';
import { ThemeElegant } from './themes/ThemeElegant';
import { ThemeTech } from './themes/ThemeTech';

interface PreviewProps {
  data: FlyerData;
}

export const FlyerPreview: React.FC<PreviewProps> = ({ data }) => {
  const renderTheme = () => {
    switch (data.theme) {
      case 'classic': return <ThemeClassic data={data} />;
      case 'minimalist': return <ThemeMinimalist data={data} />;
      case 'bento': return <ThemeBento data={data} />;
      case 'accent': return <ThemeAccent data={data} />;
      case 'friendly': return <ThemeFriendly data={data} />;
      case 'brutalist': return <ThemeBrutalist data={data} />;
      case 'elegant': return <ThemeElegant data={data} />;
      case 'tech': return <ThemeTech data={data} />;
      default: return <ThemeClassic data={data} />;
    }
  };

  return (
    <div id="preview-container" className="main-content">
      {/* 這是 A4 畫布的外框 */}
      <div className="a4-page">
        {renderTheme()}
      </div>
    </div>
  );
};
