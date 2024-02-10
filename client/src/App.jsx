import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { LoginProvider } from "./contexts/loginContext.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import MarketPlace from "./pages/MarketPlace.jsx";
import NoPage from "./pages/NoPage.jsx";

function App() {
  return (
    <LoginProvider>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </LoginProvider>
  );
}

export default App;
