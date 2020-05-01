import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./nav";
import bg from "../images/bg.jpg";

class TopMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=36ef7536e824849845eecb65dbab1826&language=en-US`
    );

    this.setState({ data: resp.data.results });
    console.log(resp.data.results);
  }
  render() {
    return (
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Nav />
        <div className="top-movie">
          {this.state.data.map((data) => (
            <div className="top-movie-card" key={data.id}>
              <Link
                to={`/top-movies/${data.original_title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                state={{ id: data.id }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt={data.original_title}
                  style={{ height: "80%" }}
                />
                <h3>{data.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TopMovies;
