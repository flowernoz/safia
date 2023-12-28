import {
  Banner,
  Header,
  Footer,
  Menu,
  CartLinks,
  OurValues,
  About,
  News,
} from "../../components";
function Home() {
  const arr = [
    {
      img: "https://safiabakery.uz/uploads/products/thumbs/171_1698217025.png",
      title: "Qaynatma xamirli  Pain",
      price: 20000,
      type: "new",
    },
    {
      img: "https://safiabakery.uz/uploads/products/thumbs/171_1698216937.png",
      title: "Ananasli Qatlama",
      price: 16000,
      type: "new",
    },
    {
      img: "https://safiabakery.uz/uploads/products/thumbs/171_1698217199.png",
      title: "Sosiskali Qatlama",
      price: 16000,
      type: "new",
    },
    {
      img: "https://safiabakery.uz/uploads/products/thumbs/171_1669992159.png",
      title: "Blek forest tartaletka",
      desc: "yupqa xamirli oq biskvit tvorog-qaymoqli kremva barra malina",
      price: 22000,
    },
    {
      img: "https://safiabakery.uz/uploads/products/thumbs/171_1672828185.png",
      title: "Blek forest tartaletka",
      desc: "yupqa xamirli oq biskvit tvorog-qaymoqli kremva barra malina",
      price: 22000,
    },
    {
      img: "https://safiabakery.uz/uploads/products/thumbs/171_1693203748.png",
      title: "Blek forest tartaletka",
      desc: "yupqa xamirli oq biskvit tvorog-qaymoqli kremva barra malina",
      price: 22000,
    },
    {
      img: "https://safiabakery.uz/uploads/products/thumbs/171_1671014979.png",
      title: "Blek forest tartaletka",
      desc: "yupqa xamirli oq biskvit tvorog-qaymoqli kremva barra malina",
      price: 22000,
    },
  ];
  const newData = arr.slice(0, 3);
  const popular = arr.slice(3);
  return (
    <div className="home">
      <Header />
      <Banner />
      <Menu />
      <CartLinks title={"Yangilari"} data={newData} />
      <CartLinks title={"Eng ko'p sotilgan"} data={popular} />
      <OurValues />
      <About />
      <News />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
