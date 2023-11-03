import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import Home, { AnimeProvider } from "./Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fav from "./Fav";
import Description from "./Description";
import SearchDetails from "./SearchDetails";

function App() {
  return (
    <AnimeProvider>
      <div className="w-screen overflow-x-hidden">
        <SkeletonTheme baseColor="#313131" highlightColor="#525252">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:AnimeId" element={<Description />} />
              <Route
                path="/searchD/:searchResultId"
                element={<SearchDetails />}
              />
              <Route path="/favs" element={<Fav />} />
            </Routes>
          </Router>
        </SkeletonTheme>
      </div>
    </AnimeProvider>
  );
}

export default App;
