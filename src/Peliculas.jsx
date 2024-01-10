import "./Peliculas.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Catalogo } from "./components/catalogo/catalogo"
import { Footer } from "./components/footer/Footer";


const CatalogoPeliculas = () => (
  <>
    <Header />
    <Catalogo />
    <Footer />
  </>
);

const Peliculas = () => (
    <Router>
    <Routes>
      <Route path="/" element={<CatalogoPeliculas />} />
    </Routes>
    </Router>
  );
  
  export default Peliculas;