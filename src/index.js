import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Projects from "./routes/projects";
import About from "./routes/about";
import Footer from './routes/Footer/footer';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <HashRouter >
    <App/>

  </HashRouter>
  </React.StrictMode>
);