import React from "react";
import { Link } from "react-router-dom";
import "./Moviecard.css"

const Moviecard = ({ data }) => {
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h1>{data.Title}</h1>
              <p>{data.year}</p>
              <p> {data.imdbID}</p>
              <p> {data.year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Moviecard;
