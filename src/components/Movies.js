import React from "react";
import Movie from "./Movie";

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <divv>
          <section class="notFound">
            <div class="img">
              <img
                src="https://assets.codepen.io/5647096/Delorean.png"
                alt="El Delorean, El Doc y Marti McFly"
              />
            </div>
            <div class="text">
              <h1>404</h1>
              <h2>PAGE NOT FOUND</h2>
              <h3>BACK TO HOME?</h3>
            </div>
          </section>
        </divv>
      )}
    </div>
  );
}

export default Movies;
