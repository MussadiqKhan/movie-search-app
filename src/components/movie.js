import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Nav from "./nav";

const Movie = (props) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { slug } = useParams();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${location.state.id}?api_key=36ef7536e824849845eecb65dbab1826&language=en-US
    `);
    setData(response.data);
    console.log(response.data);
  };

  return (
    <div
      className="ui"
      style={
        data.backdrop_path
          ? {
              background: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            }
          : { background: "" }
      }
    >
      <Nav />
      <div className="card">
        <div className="image">
          {data ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.original_title}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className="details">
          <div className="title">
            <h1>{data.title}</h1>
          </div>
          <div className="tag">
            <h2>{data.tagline}</h2>
          </div>
          <div className="summary">
            <p>{data.overview}</p>
          </div>

          <div className="details-2">
            <div className="genre">
              <p>Genre:</p>

              {data.title ? (
                <div>
                  {" "}
                  {data.genres.map((genre, index) => (
                    <span key={index}>{(index ? ", " : "") + genre.name}</span>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="rating">
              <p>rating:</p>
              <span> {data.vote_average}</span>
            </div>
            <div className="language">
              <p>Language:</p>
              <span>
                {data.spoken_languages ? data.spoken_languages[0].name : "NA"}
              </span>
            </div>
            <div className="release">
              <p>Release Date:</p>
              <span>{data.release_date}</span>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Movie;
