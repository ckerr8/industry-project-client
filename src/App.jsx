import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from "../src/pages/HomePage/HomePage";
import Footer from "../src/components/Footer/Footer";
import "./styles/global.scss";
import QPLiveVsStream from './pages/QPLiveVsStream/QPLiveVsStream';
import Results from './pages/Results/Results'

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/livevsstream" element={<QPLiveVsStream />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
