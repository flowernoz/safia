import "./Banner.css";
import bannerImg from "../../assets/banner/imgBanner.jpeg";
import bannerVid from "../../assets/banner/videoBanner.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
function Banner() {
  return (
    <div className="banner">
      <Swiper
        style={{
          "--swiper-navigation-color": "#333",
          "--swiper-navigation-size": " 25px",
          "--swiper-navigation-background": "#333",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#aaa8a8",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="banner__img" src={bannerImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <video
            className="banner__img"
            muted
            autoPlay
            loop
            src={bannerVid}
          ></video>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
