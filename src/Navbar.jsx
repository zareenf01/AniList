// import React from "react";
// import { Link } from "react-router-dom";
// import { useAnimeContext } from "./Home";

// export default function Navbar() {
//   const { search, setSearch, searchResult } = useAnimeContext();

//   return (
//     <div className="p-3 m-3">
//       <div className="flex flex-col md:items-center justify-between md:flex-row">
//         <div className="flex items-center">
//           <img
//             src="/images/logo.png"
//             alt=""
//             className="w-28 mr-8 md:w-32 md-mr-12"
//           />
//           <h2 className="font-semibold mt-3 text-xl text-[#5c5c5c]">
//             Join <br />
//             Now
//           </h2>

//           <img
//             src="/images/discord.png"
//             alt=""
//             className="  ml-10 cursor-pointer md:flex"
//           />
//           <img
//             src="/images/telegram.png"
//             alt=""
//             className=" mx-1 cursor-pointer md:flex"
//           />
//           <img
//             src="/images/reddit.png"
//             alt=""
//             className=" mx-1 cursor-pointer md:flex"
//           />
//           <img
//             src="/images/twitter.png"
//             alt=""
//             className=" mx-1 cursor-pointer md:flex"
//           />
//         </div>

//         <input
//           type="search"
//           placeholder="search your anime"
//           className="focus:outline-none p-3 rounded-md mt-5 md:mt-0"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {searchResult.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-20 p-5 m-3">
//             {searchResult.map((anime, index) => {
//               return (
//                 <div className="" key={index}>
//                   <Link to={`/details/${anime.mal_id}`}>
//                     <div className="flex flex-col relative">
//                       <div className="relative">
//                         <img
//                           src={anime.images.jpg.large_image_url}
//                           alt=""
//                           className="h-72 cursor-pointer w-full relative"
//                         />
//                         <h1 className="text-white text-center text-lg mt-5 font-semibold">
//                           {anime.title_english || anime.title}
//                         </h1>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }
