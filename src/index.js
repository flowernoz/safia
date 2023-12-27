import React from "react";
import "./global.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Snowfall from "react-snowfall";
const snowflake = document.createElement("img");
snowflake.src = "./assets/snow.png";
const images = [snowflake, snowflake];
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Router />
    {/* <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
      snowflakeCount={200}
      // images={images}
    /> */}
  </BrowserRouter>
);
