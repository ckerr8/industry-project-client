import { Hero } from "./components/Hero/Hero";
import "./styles/global.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Hero />
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App
