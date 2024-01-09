import { useEffect, useState } from "react";
import "./catalogo.css";

export const Catalogo = () => {
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
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=12",
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
    <section>
      {data.map((pelicula, index) => (
        <article key={index} className="pelicula">
          <img
            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
            alt={`Portada de la película ${index + 1}`}
          />
          <a href="" className="infoPeli">
            <div className="ver">
              <p className="puntuacion">{pelicula.vote_average}</p>
            </div>
            <h2 className="titulo">{pelicula.title}</h2>
            <p className="descripcion">{pelicula.overview}</p>
          </a>
        </article>
      ))}
    </section>
  );
};
