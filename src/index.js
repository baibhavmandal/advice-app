import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Search from './components/Search';
import Random from './components/Random';
import SearchById from './components/SearchById';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="search" element={<Search/>} />
      <Route path="random" element={<Random/>} />
      <Route path="searchbyid" element={<SearchById/>} />
    </Routes>
  </BrowserRouter>
);
