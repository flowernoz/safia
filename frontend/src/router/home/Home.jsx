import {
  About,
  Banner,
  CakesSlider,
  CartLinks,
  Menu,
  News,
  OurValues,
} from "../../components";
import { imgData } from "../../static/newsData";
import axios from "../../api";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  // const arr = [
  //   {
  //     img: "https://safiabakery.uz/uploads/products/thumbs/171_1698217025.png",
  //     title: "Qaynatma xamirli  Pain",
  //     price: 20000,
  //     type: "new",
  //   },
  //   {
  //     img: "https://safiabakery.uz/uploads/products/thumbs/171_1698216937.png",
  //     title: "Ananasli Qatlama",
  //     price: 16000,
  //     type: "new",
  //   },
  //   {
  //     img: "https://safiabakery.uz/uploads/products/thumbs/171_1698217199.png",
  //     title: "Sosiskali Qatlama",
  //     price: 16000,
  //     type: "new",
  //   },
  //   {
  //     img: "https://safiabakery.uz/uploads/products/thumbs/171_1669992159.png",
  //     title: "Blek forest tartaletka",
  //     desc: "yupqa xamirli oq biskvit tvorog-qaymoqli kremva barra malina",
  //     price: 22000,
  //   },
  //   {
  //     img: "https://safiabakery.uz/uploads/products/thumbs/171_1672828185.png",
  //     title: "Blek forest tartaletka",
  //     desc: "yupqa xamirli oq biskvit tvorog-qaymoqli kremva barra malina",
  //     price: 22000,
  //   },
  //   {
  //     img: "https://safiabakery.uz/uploads/products/thumbs/171_1693203748.png",
  //     title: "Blek forest tartaletka",
  //     desc: "yupqa xamirli oq biskvit tvorog-qaymoqli kremva barra malina",
  //     price: 22000,
  //   },
  //   {
  //     img: "https://safiabakery.uz/uploads/products/thumbs/171_1671014979.png",
  //     title: "Blek forest tartaletka",
  //     desc: "yupqa xamirli oq biskvit tvorog-qaymoqli kremva barra malina",
  //     price: 22000,
  //   },
  // ];

  useEffect(() => {
    axios
      .get("/pro/allProducts")
      .then((res) => {
        if (res.data.status === "success") {
          setData(res.data.innerData);
        }
      })
      .catch((err) => console.log(err));
  });

  const newData = data?.slice(0, 3);
  const popular = data?.slice(3);
  return (
    <div className="home">
      <Banner />
      <Menu />
      <CartLinks title={"Yangilari"} data={newData} />
      <CakesSlider />
      <CartLinks title={"Eng ko'p sotilgan"} data={popular} />
      <OurValues />
      <About />
      <News imgData={imgData} />
    </div>
  );
}

export default Home;
