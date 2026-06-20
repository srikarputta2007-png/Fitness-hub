import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { FitnessProvider } from './context/FitnessContext.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FitnessProvider>
        <App />
      </FitnessProvider>
    </BrowserRouter>
  </React.StrictMode>
);
