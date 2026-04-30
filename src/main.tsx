import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Fallback: log if root container is missing
  // This will help debugging blank page issues in the future
  // (e.g., if index.html id changes)
  // eslint-disable-next-line no-console
  console.error('Root container not found: unable to mount React app');
}