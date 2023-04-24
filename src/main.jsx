import React from "react";
import ReactDOM from "react-dom/client";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {Originals,Action, Comedy, Romance,Horror} from "./urls"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar/>
    <Banner/>
    <RowPost title='Netflix Originals' url={Originals}/>
    <RowPost title='Action' isSmall url={Action}/>
    <RowPost title='Comedy' isSmall url={Comedy}/>
    <RowPost title='Romance' isSmall url={Romance}/>
    <RowPost title='Horror' isSmall url={Horror}/>
  </React.StrictMode>
);
