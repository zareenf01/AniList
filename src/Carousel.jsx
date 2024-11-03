import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Carousel = () => {
  const [spotlightAnime, setSpotlightAnime] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotlight = async () => {
      try {
        const response = await axios.get('https://zareen-anime-api.vercel.app/anime/zoro/spotlight');
      
        const animeData = Array.isArray(response.data) ? response.data : 
                         response.data.results ? response.data.results :
                         response.data.spotlight ? response.data.spotlight : [];
        
        // console.log('Spotlight Data:', animeData);
        setSpotlightAnime(animeData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching spotlight:', error);
        setLoading(false);
      }
    };

    fetchSpotlight();
  }, []);

  useEffect(() => {
    if (!spotlightAnime || spotlightAnime.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % spotlightAnime.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [spotlightAnime]);

  if (loading) {
    return (
      <div className="w-full h-96 bg-[#202020] animate-pulse rounded-lg">
        <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-black" />
      </div>
    );
  }

  // check
  if (!spotlightAnime || !Array.isArray(spotlightAnime) || spotlightAnime.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-white">No spotlight anime available</p>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-[30rem] md:h-[35rem] overflow-hidden -ml-[3.5rem] md:-ml-[4.5rem] rounded-lg">
      {/* items */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${spotlightAnime.length * 100}%`,
        }}
      >
        {spotlightAnime.map((anime, index) => (
          <div
            key={index}
            className="relative w-full h-full shrink-0"
          >
            {/* Image with vignette overlay */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={anime.banner}
                alt={anime.title}
                className="w-screen h-full"
              />
             <div className="absolute inset-y-0 left-0 w-[30%] h-full">
                <div
                  className="h-full w-[50%]"
                  style={{
                    background: "linear-gradient(to right, black, transparent)",
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 md:bottom-5 left-0 p-5 md:p-12 w-full">
            <h2 className="text-[#43ba6f] text-lg md:text-3xl font-bold mb-2">#{anime.rank}</h2>
              <h2 className="text-white text-lg md:text-4xl font-bold mb-2 max-w-xs md:max-w-xl">{anime.title}</h2>
              <div className="flex space-x-4 mb-4">
                <span className="text-white bg-red-600 px-2 py-1 rounded text-sm">
                  {anime.type || 'TV'}
                </span>
                <span className="text-white bg-blue-600 px-2 py-1 rounded text-sm">
                  {anime.episodes || '?'} Episodes
                </span>
              </div>
              <p className="text-white text-sm lg:text-base max-w-xs md:max-w-md lg:max-w-2xl line-clamp-3 md:line-clamp-4">
                {anime.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/*dots */}
      <div className="absolute bottom-4 right-4 flex flex-col md:flex-row space-x-2">
        {spotlightAnime.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 m-1.5 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-white md:w-4'
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;