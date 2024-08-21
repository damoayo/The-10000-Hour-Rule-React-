import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './styles/reset.css';
// import './styles/10000hours.css';
import './styles/fonts.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
