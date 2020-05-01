import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  selected = (option, value) => {
    if (value) {
      this.props.find(value.id);
    }
  };

  onChange = async (event, value) => {
    if (value) {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=36ef7536e824849845eecb65dbab1826&language=en-US
    `);

      const data = response.data;
      this.setState({ movies: data.results });
    }
  };
  render() {
    return (
      <div style={{ marginBottom: "20PX" }}>
        <Autocomplete
          freeSolo
          onChange={this.selected}
          onInputChange={this.onChange}
          options={this.state.movies}
          getOptionLabel={(option) => option.original_title}
          renderInput={(params) => (
            <TextField {...params} placeholder="Enter movie name" />
          )}
        />{" "}
      </div>
    );
  }
}

export default Search;
