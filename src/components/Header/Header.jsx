import "./Header.css";
import logo from "../../assets/logos/logo.svg";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import modalHeader from "./modalHeader";
import Register from "../Register/Register";
function Header() {
  const [openmodal, setOpenmodal] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  document.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
  return (
    <div className="header">
      {!openmodal && <modalHeader />}
      {!openRegister && <Register />}
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__links">
        <button className="header__location">Toshkent</button>
        <Link>
          Biz <br /> haqimizda
        </Link>
        <Link>Menyu</Link>
        <Link>
          Bizning <br /> qadriyatlarimiz
        </Link>
        <Link>Joylashuvlarimiz</Link>
        <Link>Karyera</Link>
        <Link>Keytring</Link>
        <Link>
          Safiya <br /> Store
        </Link>
        <a href="tel:+781134040">781134040</a>
      </div>
      <div className="header__buttons">
        <IoSearch />
        <FaRegUserCircle onClick={() => setOpenRegister(!openRegister)} />
        <HiOutlineShoppingBag />
        <button className="openmodal" onClick={() => setOpenmodal(!openmodal)}>
          {!openmodal ? <HiOutlineBars3CenterLeft /> : <IoMdClose />}
        </button>
      </div>
    </div>
  );
}

export default Header;
