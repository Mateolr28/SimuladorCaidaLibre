import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importar BrowserRouter
import App from './App';

ReactDOM.render(
  <Router> {/* Envolver la aplicación en Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
