import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./CakesSlider.css";
import slide1 from "../../assets/cakes/cake1.png";
import slide2 from "../../assets/cakes/cake2.png";
import slide3 from "../../assets/cakes/cake3.png";
import slide4 from "../../assets/cakes/cake4.png";
import slide5 from "../../assets/cakes/cake5.png";
import slide6 from "../../assets/cakes/cake6.png";

const images = [
  { img: slide1, title: "Julyetta torti" },
  { img: slide2, title: "Muzqaymoqli tort" },
  { img: slide3, title: "Pancho torti" },
  { img: slide4, title: "Roshe torti" },
  { img: slide5, title: "Mevali tort" },
  { img: slide6, title: "Cherniy prints" },
];

function CakesSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward className="arrow__svg" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack className="arrow__svg" />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    focusOnSelect: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "45px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "slick",
    slide: "div",
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="containerSlide">
      <h2 className="heading">Tortlar</h2>
      <div className="CakesSlider">
        <div className="scaleslide">
          <Slider {...settings}>
            {images.map((i, idx) => (
              <div
                key={idx}
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img src={i.img} alt={i.img} />
                {idx === imageIndex ? (
                  <Link className="cake__name">{i.title}</Link>
                ) : (
                  ""
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CakesSlider;
