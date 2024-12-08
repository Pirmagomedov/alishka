import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const d = document.getElementById('root')

if (d) {

const root = ReactDOM.createRoot(d);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}