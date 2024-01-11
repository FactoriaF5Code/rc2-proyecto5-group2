import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { SliderComponent } from "./components/slider/Slider";
import { SliderCategoriaComponent } from "./components/sliderCategoria/sliderCategoria";
import { Footer } from "./components/footer/Footer";
import { Precarga } from "./Precarga";
import  Peliculas  from "./Peliculas";

const PaginaInicio = () => (
  <>
    <Header />
    <SliderComponent />
    <SliderCategoriaComponent 
    config={{title: "AÑADIDAS RECIENTEMENTE"}}
    />
    <SliderCategoriaComponent 
    config={{title: "DESTACADAS"}}
    />
    <SliderCategoriaComponent 
    config={{title: "TOP MEJORES PELICULAS 2023"}}
    />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Precarga />} />
        <Route path="/inicio" element={<PaginaInicio />} />
        <Route path="/peliculas" element={<Peliculas />} />
      </Routes>
    </Router>
  );
}

export default App;