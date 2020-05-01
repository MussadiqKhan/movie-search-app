import React from "react";
import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/notfound";
import TopMovies from "./components/topMovies";
import Movie from "./components/movie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/top-movies" element={<TopMovies />} />
        <Route path="/top-movies/:slug" element={<Movie />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
