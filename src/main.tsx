import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Runs the app in"dev mode" (strict mode) which also executes the code twice
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
