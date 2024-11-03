import React from "react";
import { useAnimeContext } from "./Home";
import "./App.css";

export default function () {
  const { reviews } = useAnimeContext();

  const firstTen = reviews ? reviews.slice(0, 10) : [];
  return (
    <div className="bg-[#000] p-3 md:px-0">
      <div className="pt-5 p-2 md:px-0 flex ">
        {firstTen.map((comments, index) => (
          <div
            className=" bg-[#1a1a1a] p-2 m-3 h-72 rounded-lg max-w-xs md:max-w-none cursor-grab"
            key={index}
          >
            <div className="flex items-center mx-3">
              <img
                src={comments.user.images.jpg.image_url}
                alt=""
                className="w-12 max-h-12 rounded-full"
              />
              <h2 className="uppercase text-md text-white ml-3">
                {comments.user.username}
              </h2>
            </div>
            <div className="mx-3 m-3 mt-3">
              <p className=" font-medium text-sm text-center w-72 md:w-96 max-h-32 overflow-y-scroll text-white cursor-pointer">
                {comments.review}
              </p>
            </div>

            <h2 className="text-[#29b96e] text-center font-bold text-lg mt-6">
              {comments.entry.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
