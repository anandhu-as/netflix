import React, { useState } from "react";
import { API_KEY, ImageUrl } from "../../constants/constants";
import { useEffect } from "react";
import "../Banner/Banner.css";
import Axios from "../Axios";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    Axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(
      (res) => {
        console.log(res.data.results[4]);
        const randomMovie = Math.floor(Math.random() * res.data.results.length);
        setMovie(res.data.results[randomMovie]);
      }
    );
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? ImageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="titile">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button>Play</button>
          <button>MyList</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
};

export default Banner;
