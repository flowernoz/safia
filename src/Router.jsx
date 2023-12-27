import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";

function Router() {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourprojects" element={<OurProjects />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/vacancy" element={<Vacancy />} />
      </Routes>
    </div>
  );
}

export default Router;

const About = () => <h1>About</h1>;
const OurProjects = () => <h1>OurProjects</h1>;
const Progress = () => <h1>Progress</h1>;
const Vacancy = () => <h1>Vacancy</h1>;
