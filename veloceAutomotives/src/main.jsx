import { StrictMode } from 'react'
<<<<<<< HEAD
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
=======
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
>>>>>>> 9cd1fe10039935c3b1230bfa805e5cb053832071
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    <App />
=======
      <App />
>>>>>>> 9cd1fe10039935c3b1230bfa805e5cb053832071
    </BrowserRouter>
  </StrictMode>,
)
