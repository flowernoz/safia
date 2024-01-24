import React, { useEffect, useState } from "react";
import "./SinglePage.css";
import { Link, useParams } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { FiPlus, FiMinus } from "react-icons/fi";
import axios from "../../api";

const SinglePage = () => {
  let [singlePro, setSinglePro] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get("/pro/single/" + id)
      .then((res) => setSinglePro(res?.data?.innerData))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="single_page">
      <div className="single_header">
        <Link to={"/"}>
          <GoChevronLeft />
        </Link>
        <span>Back</span>
      </div>
      <div className="single_container">
        <div className="container_left">
          <img src={singlePro?.image} alt="" />
        </div>
        <div className="container_right">
          <p>{singlePro?.name}</p>
          <span>
            Weight: <p>{singlePro?.weight}</p>
          </span>
          <p className="price">{singlePro?.price} so'm</p>
          <div className="container_btn">
            <button className="count">
              <FiMinus />
              <span>0</span>
              <FiPlus />
            </button>
            <button className="cart_btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
