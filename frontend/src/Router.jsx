import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./router/home/Home";
import Menu from "./router/Menu/Menu";
import Catering from "./router/catering/Catering";
import SafiyaStore from "./router/safiyaStore/SafiyaStore";
import Cart from "./router/cart/Cart";
import SinglePage from "./router/singlePage/SinglePage";

function Router() {
  return (
    <div className="routes">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourprojects" element={<OurProjects />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/safiyastore" element={<SafiyaStore />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/menu/:category" element={<Menu />} />

        <Route path="/single/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;

const About = () => <h1>About</h1>;
const OurProjects = () => <h1>OurProjects</h1>;
const Progress = () => <h1>Progress</h1>;
const Vacancy = () => <h1>Vacancy</h1>;
