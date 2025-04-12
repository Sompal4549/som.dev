"use client";
import React from "react";
import Loadmore from "../Buttons/loadmore";
import { useState, useEffect } from "react";
import CardContainer from "../Layout/CardContainer";
const Loadmoremovies = ({ page }) => {
  const [loadedMovies, setLoadedMovies] = useState(null);
  let count = page;
  function getData({ count }) {
    const res = fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=395e7cfa60ed93858869b664e028c4fd&language=en&page=${count}`,
      { cache: "force-cache" }
    );
    if (!res.ok) {
      throw new Error("Failed to Fetch the Api");
    }
    return res.json();
  }
  const now_playing = getData(count);
  async function loadMore() {
    let new_movies = await getData(page);
    setLoadedMovies((prev) => [...prev, new_movies]);
    now_playing.concat(new_movies);
    new_movies = [];
  }
  return (
    <>
      {/* <CardContainer products={loadedMovies} /> */}

      <button onClick={loadMore}></button>
      <div>Load More component</div>
    </>
  );
};

export default Loadmoremovies;
