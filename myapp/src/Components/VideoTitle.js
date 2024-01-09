import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white hover:bg-opacity-80 text-white p-3 px-10 text-lg bg-opacity-50 rounded-lg">
          ▶Play
        </button>
        <button className="bg-white hover:bg-opacity-80 mx-2 text-white p-3 px-10 text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
