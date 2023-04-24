import React, { useEffect, useState } from "react";
import "../RowPost/RowPost.css";
import Axios from "../Axios";
import { API_KEY, ImageUrl } from "../../constants/constants";
const RowPost = (props) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    Axios.get(props.url).then(
      (res) => {
        setMovie(res.data.results);
      }
    );
  }, []);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) => (
          <img
            src={`${ImageUrl + obj.backdrop_path}`}
            className={`${props.isSmall ? "smallposter" : "poster"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RowPost;
