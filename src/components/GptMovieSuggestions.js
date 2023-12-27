import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
// import Shimmer from "./Shimmer";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;
  // console.log(movieNames);
  //OR, movieNames.length === 0 ? <Shimmer /> :
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
