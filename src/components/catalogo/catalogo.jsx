import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./catalogo.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
};

function truncate(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export const Catalogo = ({ url }) => {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDY2ZWY3YWZiYTUwOGQzODU0ZjQ0NDZlYTVhMjViYSIsInN1YiI6IjY1OTNlYzcxYTU4OTAyNzE3Zjk3MzRlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C3xeQg4rDbJfstLzXLwhnq8FV7HE9b_sJYPbDeAGDTA",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((movies) => {
        console.log("Movies from API:", movies);
        setData(Array.isArray(movies.results) ? movies.results : []);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  });

  return (
    <Slider {...settings}>
      {data.map((pelicula, index) => (
        <article key={index} className="pelicula">
          <img
            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
            alt={`Portada de la película ${index + 1}`}
          />
          <a href="" className="infoPeli">
            <div className="infoPrincipal">
              <h2 className="titulo">{pelicula.title}</h2>
              <div className="puntuacion">{pelicula.vote_average}</div>
            </div>
            <p className="descripcion">{truncate(pelicula.overview, 400)}</p>
          </a>
        </article>
      ))}
    </Slider>
  );
};
