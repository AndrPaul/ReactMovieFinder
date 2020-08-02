import Search from "./components/Search";
import React, { useState } from "react";
import axios from "axios";
import MovieDetail from "./components/MovieDetail";
import "./sass/App.scss"
require("dotenv").config();

const apikey = process.env.REACT_APP_API_KEY;

function App() {
  const [state, setState] = useState({
    inputvalue: "Batman",
    results: [],
    selected: {},
    trailer: [],
  });

  const apiurl = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=`;

  const handleInput = (e) => {
    let inputValue = e.target.value;
    setState((prevState) => {
      return { ...prevState, inputvalue: inputValue };
    });
    console.log(state.inputvalue);
  };

  const openDetail = (id) => {
    const api = `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
    axios(api)
      .then((res) => res)
      .then((data) => {
        setState((prevState) => {
          return {
            ...prevState,
            selected: data.data,
          };
        });
      });
  };

  let showTrailer = (id) => {
    axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}&language=en-US`)
      .then((res) => res)
      .then((data) => {
        if (data.data.results.length === 0) {
          setState((prevState) => {
            return {
              ...prevState,
              trailer: "https://www.youtube.com/watch?v=tvJTFMQei4g",
            };
          });
        } else {
          setState((prevState) => {
            return {
              ...prevState,
              trailer:
                "https://www.youtube.com/watch?v=" + data.data.results[0].key,
            };
          });
        }
      });
  };


  const exitButton = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  const search = (e) => {

    axios(apiurl + state.inputvalue)
      .then((response) => response)
      .then((data) => {
        //  console.log(data)
        let listofmovies = data.data.results;
        //console.log(listofmovies)
        setState((prevState) => {
          return {
            ...prevState,
            results: listofmovies,
          };
        });
      });

  };

  return (
    <div className="App">
      <header>
        <h1>React movie finder</h1>
      </header>
      <main>
        <Search
          handleInput={handleInput}
          movielist={state.results}
          moviesearch={search}
          opendetail={openDetail}
          videohandler={showTrailer}
          selectedmovie={state.selected}
          onChange={search()}
        />
        {typeof state.selected.original_title != "string" ? false : true}
        {typeof state.selected.original_title != "string" ? (
          false
        ) : (
            <MovieDetail
              selected={state.selected}
              trailer={state.trailer}
              exitbutton={exitButton}
            />
          )}
      </main>
    </div>
  );
}

export default App;
