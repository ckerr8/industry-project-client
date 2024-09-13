import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from "../src/pages/HomePage/HomePage";
import Footer from "../src/components/Footer/Footer";
import "./styles/global.scss";
import QPLiveVsStream from './pages/QPLiveVsStream/QPLiveVsStream';
import Results from './pages/Results/Results'
import QPStreaming from './pages/QPStreaming/QPStreaming';
import QPGenreLiveTv from './pages/QPGenreLiveTv/QPGenreLiveTv';
import QPSpecGenre from './pages/QPSpecGenre/QPSpecGenre';

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/livevsstream" element={<QPLiveVsStream />} />
          <Route path="/results" element={<Results />} />
          <Route path="/streaming" element={< QPStreaming/>} />
          <Route path="/genre" element={< QPGenreLiveTv/>} />
          <Route path="/subgenre" element={< QPSpecGenre/>} />
          <Route path="/result" element={<Results/>} />
        </Routes>
        <img src="../../src/assets/images/telus-1.png"></img>
        <img className="static-image" src="../../src/assets/images/telus-2.png"></img>
        <img className="static-image" src="../../src/assets/images/telus-3.png"></img>
        <img className="static-image" src="../../src/assets/images/telus-4.png"></img>
        <img className="static-image" src="../../src/assets/images/telus-5.png"></img>
        <img className="static-image" src="../../src/assets/images/telus-faq.png"></img>
      <Footer />
    </BrowserRouter>
  )
}

export default App
