// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import KinaraHome from "./pages/Kinara/Home";
import KinaraAbout from "./pages/Kinara/About";
import KinaraGallery from "./pages/Kinara/Gallery";
import KinaraContact from "./pages/Kinara/Contact";
import FuntasticoHome from "./pages/Funtastico/Home";
import FuntasticoAbout from "./pages/Funtastico/About";
import FuntasticoGallery from "./pages/Funtastico/Gallery";
import FuntasticoContact from "./pages/Funtastico/Contact";
import ResortLayout from "./components/ResortLayout";
import "./styles/pages.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* Kinara Resort Routes */}
        <Route path="/kinara" element={<ResortLayout resort="kinara" />}>
          <Route index element={<KinaraHome />} />
          <Route path="about" element={<KinaraAbout />} />
          <Route path="gallery" element={<KinaraGallery />} />
          <Route path="contact" element={<KinaraContact />} />
        </Route>
        
        {/* Funtastico Resort Routes */}
        <Route path="/funtastico" element={<ResortLayout resort="funtastico" />}>
          <Route index element={<FuntasticoHome />} />
          <Route path="about" element={<FuntasticoAbout />} />
          <Route path="gallery" element={<FuntasticoGallery />} />
          <Route path="contact" element={<FuntasticoContact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;