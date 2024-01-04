import React from "react";
import "./global.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import SnowFall from "./components/SnowFall";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <SnowFall />
    <Router />
  </BrowserRouter>
);
