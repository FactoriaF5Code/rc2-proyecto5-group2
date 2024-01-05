import "./catalogo.css";

export const Catalogo = () => {
  const peliculas = datosPeliculas.results;

  return (
      <section>
          {peliculas.map((pelicula, index) => (
              <article key={index} className="pelicula">
                  <img
                      src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
                      alt={`Portada de la película ${index + 1}`}
                  />
              </article>
      ))}
      </section>
  );
};