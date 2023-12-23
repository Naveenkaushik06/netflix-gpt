import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-44 px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-base w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 px-5 text-lg rounded-lg hover:bg-opacity-85" >
          ▷ Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-5 mx-2 text-lg bg-opacity-85 rounded-lg hover:bg-opacity-70">
        ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
