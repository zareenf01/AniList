import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAnimeContext } from "./Home";

function SearchDetails() {
  const { search, searchResult, setSearch, favorites, setFavorites } =
    useAnimeContext();
  const { searchResultId } = useParams();

  const animeID = Number(searchResultId);
  console.log("anime id:", animeID);

  const anime =
    searchResult && searchResult.find((anime) => anime.mal_id == animeID);
  console.log("found anime:", anime);

  const [trailer, setTrailer] = useState("");
  const video = anime && anime.trailer.url;

  const Watch = () => {
    setTrailer(video);
  };
  const isAnimeInFavorites = favorites.some(
    (favorite) => favorite.mal_id === anime.mal_id
  );
  const [fav, setFav] = useState(isAnimeInFavorites);

  const addFav = () => {
    setFav((state) => !state);
    if (isAnimeInFavorites) {
      // remove 
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.mal_id !== anime.mal_id
      );
      setFavorites(updatedFavorites);
    } else {
      // add
      const newFavorite = {
        id: anime.mal_id,
        image: anime.images.jpg.large_image_url,
        title: anime.title_english || anime.title,
      };
      setFavorites((prevFav) => [...prevFav, newFavorite]);
    }
  };

  if (!anime) {
    return <div>Anime not found</div>;
  }

  return (
    <>
      <div className="p-3 m-3 h-32 md:max-h-10">
        <div className="flex flex-col md:items-center justify-between md:flex-row">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/logo.png"
                alt=""
                className="w-28 mr-8 md:w-32 md-mr-12"
              />
            </Link>
            <h2 className="font-semibold mt-3 text-xl text-[#5c5c5c]">
              Join <br />
              Now
            </h2>

            <img
              src="/discord.png"
              alt=""
              className="  ml-10 cursor-pointer md:flex"
            />
            <img
              src="/telegram.png"
              alt=""
              className=" mx-1 cursor-pointer md:flex"
            />
            <img
              src="/reddit.png"
              alt=""
              className=" mx-1 cursor-pointer md:flex"
            />
            <img
              src="/twitter.png"
              alt=""
              className=" mx-1 cursor-pointer md:flex"
            />

            <Link to="/favs">
              <button className="w-60 p-2  bg-[#3e3e3e] rounded-full mx-5 md:hidden">
                <img src="/redH.png" alt="" className="w-full" />
              </button>
            </Link>
          </div>

          <div className="div items-center flex">
            <Link to="/favs">
              <button className="p-3 bg-[#3e3e3e] rounded-full mx-5 hidden md:flex">
                <img src="/redH.png" alt="" />
              </button>
            </Link>
            <input
              type="search"
              placeholder="search your anime"
              className="focus:outline-none p-3 w-full md:w-fit rounded-md mt-5 md:mt-0"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* {searchResult.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-20 p-5 m-3">
          {searchResult.map((anime, index) => {
            return (
              <div className="" key={index}>
                <Link to={`/searchD/${anime.mal_id}`}>
                  <div className="flex flex-col relative">
                    <div className="relative">
                      <img
                        src={anime.images.jpg.large_image_url}
                        alt=""
                        className="h-72 cursor-pointer w-full relative"
                      />
                      <h1 className="text-white text-center text-lg mt-5 font-semibold">
                        {anime.title_english || anime.title}
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : ( */}
      <div className="bg-[url('/blur-bg.jpg')] min-h-screen min-w-full bg-cover bg-scroll">
        <div className="flex flex-col md:flex-row justify-center md:justify-start mt-16 pt-16 p-5 backdrop-blur-lg min-h-screen">
          <img
            src={anime.images.jpg.large_image_url}
            alt=""
            className="h-72 w-60 mx-auto md:mx-0"
          />
          <div className="flex flex-col mx-16 p-2">
            <h1 className="text-4xl mt-5 md:mt-0 md:text-5xl text-[#fff] font-bold  mx-auto md:mx-0">
              {anime.title_english || anime.title}
            </h1>

            <div className="flex justify-center md:justify-start items-center mt-6">
              <button className="bg-[#f2e1ee] w-12 rounded-tl-md rounded-bl-md p-1 font-semibold h-7 mx-0.5">
                {anime.rating || "?"}
              </button>
              <button className="bg-[#e6e1a3] w-12 p-1 font-semibold h-7 mx-0.5">
                {anime.episodes || "?"}
              </button>
              <button className="bg-[#56e597] w-12 p-1 font-semibold h-7 mx-0.5">
                {anime.type}
              </button>
              <button className="bg-[#f1b9e6] w-12 p-1 font-semibold h-7 mx-0.5">
                {"23"}m
              </button>
            </div>

            <div className="flex justify-center md:justify-start items-center mt-5">
              <button
                className="flex items-center  p-1 px-2 py-2 min-w-fit bg-[#56e597] rounded-full mt-10 font-medium mr-10"
                onClick={Watch}
              >
                <img src="/play.png" alt="" className="mx-1" />
                <a href={trailer}>Watch Now</a>
              </button>
              <button
                className="flex items-center p-1 px-2 py-2 min-w-fit bg-white rounded-full mt-10 font-medium"
                onClick={addFav}
              >
                <img
                  src={fav ? "/redH.png" : "/fav.png"}
                  alt=""
                  className="mx-1"
                />
                {fav ? "Added to Favorites" : "Add to Favorites"}
              </button>
            </div>

            <p className="text-white text-left mt-8">{anime.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDetails;
