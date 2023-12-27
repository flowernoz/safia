import "./News.css";
import Detailed from "../detailed/Detailed";
import news from "../../assets/news/news.jpeg";
function News() {
  return (
    <div>
      <div className="news__top">
        <h2 className="heading">Yangiliklar</h2>
        <div className="navigate__news">
          <button></button>
          <button></button>
        </div>
        <div className="news__carts">
          <div className="news__img">
            <img src={news} alt="news" />
            <Detailed />
          </div>
          <p>aziz do'stlar, kirib kelayotgan yangi</p>
          <span>2024</span>
        </div>
      </div>
    </div>
  );
}

export default News;
