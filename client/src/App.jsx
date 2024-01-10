// import { useState } from 'react'
// import './App.css'
// import reactLogo from './assets/react.svg'
// import NavBar from './components/navbar.jsx'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./pages/About.jsx";
import MarketPlace from "./pages/MarketPlace.jsx";
import NoPage from "./pages/NoPage.jsx";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
