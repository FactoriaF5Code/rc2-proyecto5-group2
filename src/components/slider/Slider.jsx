import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export const SliderComponent = () => {
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
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((movies) => {
        console.log("Movies from API:", movies);
        setData(Array.isArray(movies.results) ? movies.results : []);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  });
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {data.map((movie, index) => (
          <div key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`Portada de la película ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
