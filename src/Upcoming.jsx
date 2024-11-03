import React from "react";
import { useAnimeContext } from "./Home";

export default function Upcoming() {
  const { Upcoming } = useAnimeContext();
  const firstTenList = Upcoming ? Upcoming.slice(0, 12) : [];
  return (
    <>
      <div className="-mx-5 md:-mx-0 md:m-2 md:p-2 mt-6 md:mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {firstTenList.map((anime, index) => {
          return (
            <div className="flex flex-col relative m-2" key={index}>
              <div className="relative">
                <img
                  src={anime.images.jpg.large_image_url}
                  alt=""
                  className="h-72 cursor-pointer w-full relative"
                />
              </div>

              <div className="h-8  absolute top-64 left-0 right-0 bg-gradient-to-t from-[#2b2b2b]"></div>

              <h1 className="text-white text-center text-lg mt-2 font-semibold">
                {anime.title_english || anime.title}
              </h1>

              <div className="flex p-1 justify-between items-center mx-3">
                <h2 className="text-[#a5a5a5] font-medium text">
                  ({anime.episodes || "?"} eps)
                </h2>

                <h2 className="text-[#a5a5a5] font-semibold text">
                  {anime.aired.prop.from.month}-{anime.aired.prop.from.day}-
                  {anime.aired.prop.from.year}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
