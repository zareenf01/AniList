import React from "react";
import { useAnimeContext } from "./Home";

export default function Genres() {
  const { genres } = useAnimeContext();
  const firstTenList = genres ? genres.slice(0, 20) : [];
  return (
    <div className="m-3 p-3">
      <h1 className="text-3xl -mt-6 mb-5 text-[#249d5a] font-semibold m-3 ">
        Genres
      </h1>
      <div className="bg-[#393939] p-3 m-1 max-w-5xl grid grid-cols-3 gap-5 w-full md:w-80 -mr-12">
        {firstTenList.map((anime, index) => {
          return (
            <div className="text-lg p-1" key={index}>
              <h2 className="font-semibold p-2 text-white hover:bg-[#676767] rounded-md w-full hover:cursor-pointer">
                {anime.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
