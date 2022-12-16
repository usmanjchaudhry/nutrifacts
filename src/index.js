import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { HashRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Projects from "./routes/projects";
import About from "./routes/about";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <HashRouter >
    <Routes>
        <Route path="/" element={<App />}>
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
    </Routes>
  </HashRouter>
);