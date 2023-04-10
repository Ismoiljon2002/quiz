import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AllContexts from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AllContexts>
      <App />
    </AllContexts>
  </React.StrictMode>
);