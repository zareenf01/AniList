import React from "react";

export default function Footer() {
  return (
    <div className="p-3 m-3 mt-28">
      <div className="flex items-center -mx-12 border-b border-[#606060] pb-8">
        <img
          src="/logo.png"
          alt=""
          className="w-36 mr-8 md:w-32 border-[#606060]  pr-10 border-r"
        />

        <img
          src="/discord.png"
          alt=""
          className="-ml-5  md:ml-8 cursor-pointer md:flex"
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
      </div>

      <div className="flex flex-col md:flex-row items-center mt-16">
        <img src="/luffy.gif" alt="" className="h-20 md:-mx-12  rounded-full" />
        <h2 className="font-semibold mt-3 text-xl text-[#43ae6e] md:ml-20">
          Share aniList <br />
          to your Friends
        </h2>

        <div className="flex items-center mt-10 justify-center md:mt-0 md:justify-start">
          <img
            src="/telegram.png"
            alt=""
            className="bg-[#18a0cd] rounded-2xl px-3 md:px-8 py-1 md:ml-10 cursor-pointer md:flex hover:-translate-y-3 duration-300"
          />
          <img
            src="/x.png"
            alt=""
            className="bg-[#000] rounded-2xl px-3 md:px-8 py-1 mx-1 cursor-pointer md:flex hover:-translate-y-3 duration-300"
          />
          <img
            src="/fb.png"
            alt=""
            className="bg-[#275597] rounded-2xl px-3 md:px-8 py-1 mx-1 cursor-pointer md:flex hover:-translate-y-3 duration-300"
          />
          <img
            src="/share.png"
            alt=""
            className="bg-[#46a95b] rounded-2xl px-3 md:px-8 py-1 mx-1 cursor-pointer md:flex hover:-translate-y-3 duration-300"
          />
        </div>
      </div>

      <h2 className="font-medium text-center mt-10 -mb-16 text-xl text-[#636363] ml-12">
        © aniList.com. All rights reserved.
      </h2>
    </div>
  );
}
