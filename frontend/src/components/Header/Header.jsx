import "./Header.css";
import logo from "../../assets/logos/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Register from "../Register/Register";
import Branch from "../branch/Branch";
import ModalHeader from "./modalHeader";

import { IoSearch, IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { CiGrid41, CiLocationOn } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Search from "../search/Search";
import { memo } from "react";

function Header() {
  let place = localStorage.getItem("branch") || "Toshkent";

  const [openmodal, setOpenmodal] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openlocation, setOpenlocation] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  document.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  openmodal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  openmodal
    ? document.querySelector(".header")?.classList.add("bgblank")
    : document.querySelector(".header")?.classList.remove("bgblank");
  return (
    <div className="header">
      {openmodal && <ModalHeader />}
      {openRegister && <Register openregister={setOpenRegister} />}
      {openlocation && <Branch openregister={setOpenlocation} />}
      {openSearch && <Search openregister={setOpenSearch} />}
      <Link to={"/"} className="header__logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="header__links">
        <button
          onClick={() => setOpenlocation(!openlocation)}
          className="header__location"
        >
          {place}
        </button>
        <Link to={"/"} className="header__link">
          Biz haqimizda
        </Link>
        <Link to={"/menu"} className="header__link">
          Menyu
        </Link>
        <Link to={"/about"} className="header__link">
          Qadriyatlarimiz
        </Link>
        <Link to={"/ourprojects"} className="header__link">
          Karyera
        </Link>
        <Link to={"/catering"} className="header__link">
          Keytring
        </Link>
        <Link to={"/safiyastore"} className="header__link">
          Safiya Store
        </Link>
        <a href="tel:+781134040">781134040</a>
      </div>
      <div className="header__buttons">
        <Link to={"/location"}>
          <CiLocationOn />
        </Link>
        <div onClick={() => setOpenSearch(!openSearch)}>
          <IoSearch />
        </div>

        <FaRegUserCircle
          className="register__svg"
          onClick={() => setOpenRegister(!openRegister)}
        />
        <Link to={"/cart"}>
          <HiOutlineShoppingBag />
        </Link>
        <button onClick={() => setOpenmodal(!openmodal)} className="openmodal">
          {!openmodal ? <HiOutlineBars3CenterLeft /> : <IoMdClose />}
        </button>
      </div>
      <div className="subHeader">
        <Link to={"/"}>
          <IoHomeOutline />
          Bosh sahifa
        </Link>
        <Link to={"/menu"}>
          <CiGrid41 />
          Menyu
        </Link>
        <Link to={"/cart"}>
          <HiOutlineShoppingBag />
          Savatcha
        </Link>
        <button onClick={() => setOpenRegister(!openRegister)}>
          <FaRegUser />
          Profil
        </button>
      </div>
    </div>
  );
}

export default memo(Header);
