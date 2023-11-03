import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { useAnimeContext } from "./Home";

const List = () => {
  const { topAir } = useAnimeContext();

  const firstTenList = topAir ? topAir.slice(0, 10) : [];

  return (
    <>
      <div className="m-5 p-5 mt-10 -ml-10 flex overflow-x-auto overflow-y-hidden">
        {firstTenList.map((anime, index) => {
          const coverImg = anime.attributes?.posterImage?.large || "";
          return (
            <Link to={`/details/${anime.id}`} key={index}>
              <div className="flex flex-col m-3 p-3 w-64 h-96" key={index}>
                <img src={coverImg} alt="" className="h-72" />
                <h1 className="text-white text-center text-lg mt-2 font-semibold">
                  {anime.attributes?.titles?.en ||
                    anime.attributes.titles.en_jp}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default List;
