import React from "react";

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div id={imdbID} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img alt={Title} className="activator" src={Poster} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title} <i className="material-icons right">more_vert</i>
        </span>
        <p>
          {Year} <span>{Type}</span>
        </p>
      </div>
    </div>
  );
}

export default Movie;
