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
      title="Peliculas Infantil"
      url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16" 
    />
    <SliderCategoriaComponent
      title="Peliculas Western"
      url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=37" 
    />
    <SliderCategoriaComponent
      title="Peliculas de Terror"
      url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27" 
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