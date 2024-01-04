import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-44 px-4 md:px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-5xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block py-6 text-base w-1/3">{overview}</p>
      <div className="my-3 md:my-0">
        <button className="opacity-85 md:opacity-100 bg-white text-black py-1 md:py-2 px-3 md:px-5 text-lg rounded-lg hover:bg-opacity-85" >
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-2 px-5 mx-2 text-lg bg-opacity-85 rounded-lg hover:bg-opacity-70">
        ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
