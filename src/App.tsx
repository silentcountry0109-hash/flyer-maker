import React, { useState, useEffect } from 'react';
import { defaultFlyerData, type FlyerData } from './types';
import { FlyerEditor } from './components/FlyerEditor';
import { FlyerPreview } from './components/FlyerPreview';
import { Login } from './components/Login';
import { LogOut } from 'lucide-react';
import './App.css';

function App() {
  const [data, setData] = useState<FlyerData>(defaultFlyerData);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has an active valid session in localStorage
    const token = localStorage.getItem('danlu_auth_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleLogout = () => {
    localStorage.removeItem('danlu_auth_token');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <button 
        onClick={handleLogout}
        className="btn-logout"
        style={{
          position: 'absolute', top: '16px', right: '16px', zIndex: 100,
          display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px',
          background: 'rgba(255,255,255,0.9)', color: '#475569', borderRadius: '8px',
          border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          cursor: 'pointer', fontWeight: 600, fontSize: '14px', backdropFilter: 'blur(4px)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#fff'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
      >
        <LogOut size={16} />
        登出系統
      </button>
      <style>{`
        @media print {
          .btn-logout { display: none !important; }
        }
      `}</style>
      <FlyerEditor 
        data={data} 
        onChange={setData} 
        onPrint={handlePrint} 
      />
      <FlyerPreview data={data} />
    </div>
  );
}

export default App;
