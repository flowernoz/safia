import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import Detailed from "../detailed/Detailed";
import "./News.css";

function News({ imgData }) {
  const [counter, setCounter] = useState(0);
  function imgNextClick() {
    setCounter((p) => (imgData.length - 3 > counter * 3 ? p + 1 : (p = 0)));
  }
  function imgPrevClick() {
    function inc(p) {
      if (counter <= 0) {
        return (p = Math.round((imgData.length - 1) / 3));
      }
      if (imgData.length > counter * 3) {
        return p - 1;
      }
    }
    setCounter((p) => inc(p));
  }
  const contentTransform = counter > 0 ? 383 * counter : 0;
  return (
    <div className="news__home">
      <div className="news__top">
        <Link to={"/news"} className="heading">
          Yangiliklar
        </Link>
        <div className="navigate__news">
          <button onClick={imgPrevClick}>
            <GrPrevious />
          </button>
          <button onClick={imgNextClick}>
            <GrNext />
          </button>
        </div>
        <div className="new__carts">
          {imgData?.map((item, inx) => (
            <div
              key={inx}
              className="news__cart"
              style={{ transform: `translateX(-${contentTransform}px)` }}
            >
              <div className="news__img">
                <img src={item.img} alt="news" />
                <Detailed />
              </div>
              <Link className="news__link" to={"/"}>
                {/* aziz do'stlar, kirib kelayotgan yangi */}
                {item.title}
              </Link>
              <span className="cart__description">Tayyor ekaningiz aniq!</span>
            </div>
          ))}
          img:
        </div>
      </div>
    </div>
  );
}

export default News;
