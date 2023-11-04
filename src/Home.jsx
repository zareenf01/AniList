import { createContext, useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Image, Shimmer } from "react-shimmer";
import { ShimmerButton } from "react-shimmer-effects";
import axios from "axios";
import List from "./list";
import Comment from "./Comments";
import Latest from "./Latest";
import UpComing from "./Upcoming";
import Genres from "./genre";
import Footer from "./Footer";
import CardSkeleton from "./Card-skeleton";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [topAir, setTopAir] = useState();

  const [reviews, setReviews] = useState();

  const [latest, setLatest] = useState();

  const [Upcoming, setUpcoming] = useState();

  const [genres, setGenres] = useState();

  const [favorites, setFavorites] = useState([]);

  const [isLoading, setLoading] = useState(true);

  //Reviewwwwsss
  const getReview = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/reviews/anime`);

    const reviewData = await response.json();
    setReviews(reviewData.data);
  };
  //Top Airinggggg
  const getTopAir = async () => {
    const response = await fetch(`https://kitsu.io/api/edge/trending/anime`);

    const topAirData = await response.json();
    // console.log(topAirData.data);
    setTopAir(topAirData.data);
  };

  //Latest Episodddeees
  const getLatest = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/watch/episodes`);

    const latestData = await response.json();
    setLatest(latestData.data);
  };

  //UpComingggg
  const getComing = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/seasons/upcoming`);

    const ComingData = await response.json();
    setUpcoming(ComingData.data);
  };

  //Genresss
  let searchTimer;

  const getGenres = async () => {
    clearTimeout(searchTimer);

    searchTimer = setTimeout(async () => {
      const response = await fetch(`https://api.jikan.moe/v4/genres/anime`);
      const GenresData = await response.json();
      setGenres(GenresData.data);
    }, 500);
  };

  let cancelTokenSource = axios.CancelToken.source();
  const getData = async () => {
    // Cancel the previous request
    cancelTokenSource.cancel("Request canceled");

    // Create a new cancel token
    const newTokenSource = axios.CancelToken.source();

    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${search}`,
        {
          cancelToken: newTokenSource.token,
        }
      );
      const resData = response.data;
      setSearchResult(resData.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        // Request was canceled
      } else {
        console.error("Error fetching data:", error);
      }
    }

    cancelTokenSource = newTokenSource;
  };

  useEffect(() => {
    if (search) {
      getData();
    }
    getTopAir();
    getReview();
    getLatest();
    getComing();
    getGenres();

    const delay = 2000;
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeOut);
  }, [search]);

  return (
    <AnimeContext.Provider
      value={{
        search,
        setSearch,
        searchResult,
        setSearchResult,
        latest,
        Upcoming,
        getLatest,
        getComing,
        topAir,
        setTopAir,
        reviews,
        setReviews,
        genres,
        setGenres,
        favorites,
        setFavorites,
        isLoading,
        setLoading,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

const useAnimeContext = () => {
  return useContext(AnimeContext);
};

function Home() {
  const {
    search,
    setSearch,
    searchResult,
    setSearchResult,
    latest,
    Upcoming,
    getLatest,
    getComing,
    topAir,
    setTopAir,
    reviews,
    setReviews,
    genres,
    setGenres,
    isLoading,
    setLoading,
  } = useAnimeContext();

  return (
    <div className="p-3 m-3">
      <div className="flex flex-col md:items-center justify-between md:flex-row">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo.png"
              alt=""
              className="w-28 mr-8 md:w-32 md-mr-12"
            />
          </Link>
          <h2 className="font-semibold mt-3 text-md md:text-xl text-[#5c5c5c]">
            Join <br />
            Now
          </h2>

          <img
            src="/discord.png"
            alt=""
            className="  ml-3 cursor-pointer md:flex md:10"
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
              <img src="/redH.png" alt="" className="w-6" />
            </button>
          </Link>
          <input
            type="search"
            placeholder="search your anime"
            className="focus:outline-none w-full md:w-fit p-3 rounded-md mt-5 md:mt-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {searchResult.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-20">
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
      ) : (
        <div className="m-3 p-3">
          <h1 className="text-3xl mt-20 -mb-16 text-[#249d5a] font-semibold">
            Top Airing
          </h1>
          <div className="m-5 p5 flex w-full overflow-x-scroll">
            <div className="flex">
              {isLoading && <CardSkeleton cards={10} />}
              <List />
            </div>
          </div>

          <div className="overflow-x-scroll overflow-y-hidden -mx-12 bg-[#323232]">
            <Comment />
          </div>

          <div className="m-5 p-5  w-full ">
            <Latest />
          </div>

          <h1 className="text-3xl mt-20 ml-8 mb-5 text-[#249d5a] font-semibold m-3">
            Top Upcoming
          </h1>
          <div className="p-2 m-2 flex flex-col md:flex-row mx-3 relative items-start">
            <UpComing />
            <Genres />
          </div>

          <div className="p-2">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export { AnimeProvider, useAnimeContext, Home as default };
