import React from "react";
import { useAnimeContext } from "./Home";

export default function Fav() {
  const { favorites } = useAnimeContext();
  return (
    <div>
      <div className="p-5 m-3">
        <h1 className="text-[#249d5a] text-4xl text-center font-semibold mt-5">
          Your Favorites are Here!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-20">
          {favorites.map((favorite) => (
            <div key={favorite.id}>
              <img
                src={favorite.image}
                className="h-72 cursor-pointer w-full rounded-xl"
                alt=""
              />
              <h2 className="text-xl font-semibold text-center text-white mt-4">
                {favorite.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
