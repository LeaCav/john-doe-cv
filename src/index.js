import React from 'react';
import ReactDOM from 'react-dom/client';
import Accueil from './Accueil';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accueil />
  </React.StrictMode>
);

reportWebVitals();