import "./News.css";
import Detailed from "../detailed/Detailed";
import news from "../../assets/news/news.jpeg";
import { Link } from "react-router-dom";
function News() {
  return (
    <div className="news__home">
      <div className="news__top">
        <Link to={"/news"} className="heading">
          Yangiliklar
        </Link>
        <div className="navigate__news">
          <button> </button>
          <button> </button>
        </div>
        <div className="news__carts">
          <div className="news__img">
            <img src={news} alt="news" />
            <Detailed />
          </div>
          <Link className="news__link" to={"/"}>
            aziz do'stlar, kirib kelayotgan yangi
          </Link>
          <span className="cart__description">Tayyor ekaningiz aniq!</span>
        </div>
      </div>
    </div>
  );
}

export default News;
