import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { SliderComponent } from "./components/slider/Slider";
import { Footer } from "./components/footer/Footer";

import { Precarga } from "./Precarga";
import { Catalogo } from "./components/catalogo/catalogo";

const PaginaInicio = () => (
  <>
    <Header />
    <SliderComponent />
    <Catalogo url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=infantil'
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
