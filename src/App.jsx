import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HomePage from "../src/pages/HomePage/HomePage";
import Footer from "../src/components/Footer/Footer";
import "./styles/global.scss";

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
