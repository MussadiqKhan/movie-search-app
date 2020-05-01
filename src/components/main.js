import React, { Component } from "react";
import axios from "axios";
import Card from "./card";
import Search from "./search";
import Nav from "./nav";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: "",
      title: "",
      genre: [],
      summary: "",
      runtime: "",
      language: "",
      rating: "",
      release_date: "",
      tag: "",
      image: "",
      background: "",
    };
  }

  async componentDidMount() {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/290512?api_key=36ef7536e824849845eecb65dbab1826&language=en-US
      `);

    const data = response.data;

    this.setState({
      movie_id: data.id,
      title: data.original_title,
      genre: data.genres,
      summary: data.overview,
      tag: data.tagline,
      runtime: data.runtime,
      language: data.spoken_languages[0].name,
      rating: data.vote_average,
      release_date: data.release_date,
      image: data.poster_path,
      background: data.backdrop_path,
    });
  }

  find = async (state) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${state}?api_key=36ef7536e824849845eecb65dbab1826&language=en-US
    `);

    const data = response.data;
    console.log(data);

    if (data.spoken_languages.length > 0) {
      this.setState({
        movie_id: data.id,
        title: data.original_title,
        genre: data.genres,
        summary: data.overview,
        tag: data.tagline,
        runtime: data.runtime,
        language: data.spoken_languages[0].name,
        rating: data.vote_average,
        release_date: data.release_date,
        image: data.poster_path,
        background: data.backdrop_path,
      });
    } else {
      this.setState({
        movie_id: data.id,
        title: data.original_title,
        genre: data.genres,
        summary: data.overview,
        tag: data.tagline,
        runtime: data.runtime,
        language: "NA",
        rating: data.vote_average,
        release_date: data.release_date,
        image: data.poster_path,
        background: data.backdrop_path,
      });
    }
  };

  render() {
    return (
      <div
        className="ui"
        style={
          this.state.title
            ? {
                background: `url(https://image.tmdb.org/t/p/original${this.state.background})`,
              }
            : { background: "" }
        }
      >
        <Nav />
        <Search find={this.find} />
        <Card data={this.state} />
      </div>
    );
  }
}

export default Main;
