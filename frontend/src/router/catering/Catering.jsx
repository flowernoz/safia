import React from 'react'
import './Catering.css'
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import CateringPage from './cateringPage/CateringPage'
import CateringPage2 from './cateringPage2/CateringPage2'
import CateringPage3 from './cateringPage3/CateringPage3'
import { Link } from 'react-router-dom';

function Catering() {
  return (
    <div>
      <div className="cateringMain">
        <div className="cateringMain_header">
          <p><Link to={"/"}>Главная</Link>  / Керинг в Ташкенте - Проведем ваше мероприятие на высшем уровне</p>
        </div>
        <div className="cateringMain_banner">
          <img src="https://safiabakery.uz/img/catering.png" alt="img" />
          <div className="catering_icons">
            <FaPhoneAlt className='catering_icons_items' />
            <FaTelegramPlane className='catering_icons_items' />
            <FaInstagramSquare className='catering_icons_items' />
          </div>
        </div>

        <div className="catering_router">
          <CateringPage />
          <CateringPage2 />
          <CateringPage3 />
        </div>

      </div>
    </div>
  )
}

export default Catering