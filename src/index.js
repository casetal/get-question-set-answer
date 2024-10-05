import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './style.css';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App />
);