import React from "react";
import { BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearch = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className=" flex justify-center">
      <div className="absolute -z-10">
        <img className="w-screen h-screen" alt="logo" src={BG_URL} />
      </div>
      <form className=" mt-[10%] w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
