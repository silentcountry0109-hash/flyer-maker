import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { ShieldAlert, Fingerprint } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
}

interface JwtPayload {
  email: string;
  name: string;
  picture: string;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [errorMsg, setErrorMsg] = useState<string>('');
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleError = () => {
    setErrorMsg('登入失敗，請稍後再試或檢查網路連線。');
  };

  const handleSuccess = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      try {
        const decoded = jwtDecode<JwtPayload>(credentialResponse.credential);
        
        // 驗證是否為 @danlu-education.com 網域
        if (decoded.email && decoded.email.endsWith('@danlu-education.com')) {
          localStorage.setItem('danlu_auth_token', credentialResponse.credential);
          onLoginSuccess();
          setErrorMsg('');
        } else {
          setErrorMsg(`無授權訪問：僅限 @danlu-education.com 網域。目前帳號為 ${decoded.email}`);
        }
      } catch (err) {
        setErrorMsg('憑證解析失敗。');
      }
    }
  };

  return (
    <div className="login-wrapper">
      <style>{`
        .login-wrapper {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%);
          font-family: 'Inter', system-ui, sans-serif;
        }
        .login-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          padding: 3rem 2.5rem;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05);
          text-align: center;
          max-width: 420px;
          width: 90%;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .icon-container {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: linear-gradient(135deg, #3b82f6, #0ea5e9);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          box-shadow: 0 8px 16px rgba(14, 165, 233, 0.25);
        }
        .login-title {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }
        .login-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 0 0 32px 0;
          line-height: 1.5;
        }
        .error-alert {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 12px 16px;
          border-radius: 12px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          text-align: left;
          font-size: 14px;
          line-height: 1.4;
          margin-bottom: 24px;
          animation: slideDown 0.3s ease-out;
        }
        .error-alert svg {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .missing-env-warning {
          background: #fffbeb;
          border: 1px solid #fde68a;
          color: #b45309;
          padding: 16px;
          border-radius: 12px;
          font-size: 14px;
          text-align: left;
          margin-bottom: 24px;
        }
        .missing-env-warning code {
          background: rgba(0,0,0,0.05);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          color: #92400e;
          display: block;
          margin-top: 8px;
        }
        .google-btn-container {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
        }
        .footer-note {
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.6;
          border-top: 1px solid #e2e8f0;
          padding-top: 20px;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="login-card">
        <div className="icon-container">
          <Fingerprint size={32} color="white" />
        </div>
        <h1 className="login-title">典陸教育集團</h1>
        <p className="login-subtitle">內部專屬平台：智慧宣傳單產生器<br/>(AI Flyer Generator Pro)</p>

        {errorMsg && (
          <div className="error-alert">
            <ShieldAlert size={18} />
            <span>{errorMsg}</span>
          </div>
        )}

        {clientId ? (
          <div className="google-btn-container">
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
              useOneTap
              theme="outline"
              size="large"
              shape="pill"
              text="continue_with"
            />
          </div>
        ) : (
          <div className="missing-env-warning">
            <strong>系統未完整配置</strong>
            <p style={{ margin: '8px 0 0 0' }}>請在根目錄建立 <code>.env</code> 檔案，並填入 Google Client ID：</p>
            <code>VITE_GOOGLE_CLIENT_ID=您的編號</code>
          </div>
        )}

        <div className="footer-note">
          請使用公司配發之 <strong>@danlu-education.com</strong> 帳號進行身分驗證，未獲授權嚴禁進入本系統。
        </div>
      </div>
    </div>
  );
};
