import React from "react";
import Skeleton from "react-loading-skeleton";

export default function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div
        className="m-5 p-5 mt-10 -ml-10 flex overflow-x-auto overflow-y-hidden"
        key={index}
      >
        <div className="flex flex-col m-3 p-3 w-64 h-96">
          <Skeleton className="h-72 w-full" />
          <Skeleton className="mt-2" />
        </div>
      </div>
    ));
}
