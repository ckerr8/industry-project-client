import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from "../src/pages/HomePage/HomePage";
import Footer from "../src/components/Footer/Footer";
import "./styles/global.scss";
import { Hero } from './components/Hero/Hero';
import QPLiveVsStream from './pages/QPLiveVsStream/QPLiveVsStream';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Hero />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/livevsstream" element={<QPLiveVsStream />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
