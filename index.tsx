import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* Set basename to match your GitHub Pages repo name */}
    <BrowserRouter basename="/portfolio-website-xx">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
