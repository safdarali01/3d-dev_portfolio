// Importing necessary modules from React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing global CSS styles

// Creating the root element and rendering the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Rendering the App component inside StrictMode */}
  </StrictMode>,
);
