import React from "react";
import { useAnimeContext } from "./Home";
import "./App.css";

export default function () {
  const { reviews } = useAnimeContext();

  const firstTen = reviews ? reviews.slice(0, 10) : [];
  return (
    <div className="bg-[#323232] p-3 m-3 mt-20">
      <button className="bg-[#0d9b4d] text-md text-center font-semibold p-2 px-3 rounded-full mx-3 m-3 -mt-6">
        Newest Comment
      </button>
      <div className="p-3 m-3 flex bg-[#323232]">
        {firstTen.map((comments, index) => (
          <div
            className=" bg-[#4a4a4a] p-3 m-3 h-72 rounded cursor-grab"
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
              <p className=" font-medium text-sm text-center w-96 max-h-32 overflow-y-scroll text-white cursor-pointer">
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
