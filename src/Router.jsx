import React from "react"
import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "./components"
import Menu from "./router/Menu/Menu"
import Cart from './router/cart/Cart'
import Home from "./router/home/Home"
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
        <Route path='/cart' element={<Cart />}/>
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
