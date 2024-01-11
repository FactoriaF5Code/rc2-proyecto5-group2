import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderCategoria.css";

const sliderCategoriaSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: true,
};

export const SliderCategoriaComponent = ({url, title}) => {
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
    fetch( url, options )
      .then((response) => response.json())
      .then((movies) => {
        console.log("Movies from API:", movies);
        setData(Array.isArray(movies.results) ? movies.results : []);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="sliderCategoriaContainer">
      <h1 className="categoriaPelicula">{title}</h1>
      <Slider {...sliderCategoriaSettings}>
        {data.map((movie, index) => (
          <div className="sliderCategoriaCaja" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`Portada de la película ${index + 1}`}
              className="sliderCategoriaCarousel"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
