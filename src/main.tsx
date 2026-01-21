import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { PythonProvider } from './context/PythonContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PythonProvider>
        <App />
      </PythonProvider>
    </BrowserRouter>
  </StrictMode>,
);
