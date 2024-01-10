import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { SliderComponent } from "./components/slider/Slider";
import { Footer } from "./components/footer/Footer";

import { Precarga } from "./Precarga";

const PaginaInicio = () => (
  <>
    <Header />
    <SliderComponent />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Precarga />} />
        <Route path="/inicio" element={<PaginaInicio />} />
      </Routes>
    </Router>
  );
}

export default App;
