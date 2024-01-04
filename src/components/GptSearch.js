import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
    <div className="sticky z-100 top-0 left-0 overflow-hidden">
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
      </div>
    </>
  );
};

export default GptSearch;
