import React from "react";
import { useAnimeContext } from "./Home";

export default function Latest() {
  const { latest } = useAnimeContext();

  const firstTenList = latest ? latest.slice(0, 12) : [];
  return (
    <>
      <h1 className="text-3xl mt-20 ml-8 -mb-8 text-[#249d5a] font-semibold m-3">
        Latest Episodes
      </h1>
      <div className="m-5 p-5 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {firstTenList.map((anime, index) => {
          return (
            <div className="flex flex-col relative" key={index}>
              <div className="relative">
                <img
                  src={anime.entry.images.jpg.large_image_url}
                  alt=""
                  className="h-72 cursor-pointer w-full relative"
                />
              </div>

              <div className="h-8  absolute top-64 left-0 right-0 bg-gradient-to-t from-slate-900"></div>

              <button className="bg-[#56e597] w-12 rounded-tr-md rounded-br-md p-1 font-semibold z-40 absolute top-60">
                {anime.episodes[0].mal_id}
              </button>

              <h1 className="text-white text-center text-lg mt-2 font-semibold">
                {anime.entry.title}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
