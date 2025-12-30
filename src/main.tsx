import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { setAuthToken } from './api/api';

function Bootstrap() {
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('authToken');
    const tokenFromEnv = import.meta.env.VITE_DEV_AUTH_TOKEN;
    const tokenToUse = tokenFromStorage ?? tokenFromEnv ?? null

    if (tokenToUse) {
      setAuthToken(tokenToUse);
    }

    return
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bootstrap />
  </StrictMode>,
)
