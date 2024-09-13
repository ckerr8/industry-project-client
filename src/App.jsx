import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from "../src/pages/HomePage/HomePage";
import Footer from "../src/components/Footer/Footer";
import "./styles/global.scss";
import QPLiveVsStream from './pages/QPLiveVsStream/QPLiveVsStream';
<<<<<<< HEAD
import Results from './pages/Results/Results'
=======
import QPStreaming from './pages/QPStreaming/QPStreaming';
>>>>>>> develop

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/livevsstream" element={<QPLiveVsStream />} />
<<<<<<< HEAD
          <Route path="/results" element={<Results />} />
=======
          <Route path="/streaming" element={< QPStreaming/>} />
>>>>>>> develop
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
