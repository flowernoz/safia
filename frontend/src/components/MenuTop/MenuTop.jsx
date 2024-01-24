import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import newYear from "../../assets/banner/yangi-yil.jpeg";
import "./MenuTop.css";
import axios from "../../api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../redux/cart";
import { useCart } from "../../redux/selectors";

function MenuTop() {
  const categories = useParams().category;
  const dispatch = useDispatch();

  const cart = useCart();
  console.log(cart);

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
  const buttons = [
    { category: "", text: "Mazali shirinliklar bu yerda" },
    { category: "cake", text: "Mazali shirinliklar bu yerda" },
    { category: "healthy-food", text: "To'g'ri ovqatlanish shirinliklari" },
    { category: "fastfood", text: "Yarimtayyor mahsulotlar" },
    { category: "drinks", text: "Bar menyusi" },
    { category: "candle", text: "Sham otashinlar" },
    { category: "discount", text: "Aksiya" },
    { category: "delivery", text: "Animatorlar yetkaizb berish" },
    { category: "products", text: "Safia store" },
  ];

  const [data, setData] = useState([]);
  const [category, setCategory] = useState(categories || "");
  const [title, setTitle] = useState(
    buttons.find((i) => i.category === categories)?.text ||
      "Mazali shirinliklar bu yerda"
  );

  const handleClick = (i) => {
    setCategory(i.category);
    setTitle(i.text);
  };

  useEffect(() => {
    axios
      .get(`/pro/category/?category=${category}`)
      .then((res) => {
        if (res.data.status === "success") {
          setData(res.data.innerData);
        }
      })
      .catch((err) => console.log(err));
  }, [category]);

  const buyNow = (item) => {
    dispatch(AddToCart(item));
  };

  return (
    <div className="Menu">
      <div className="MenuBanner">{title}</div>
      <div className="menuPath">
        <Link> Bosh sahifa </Link>
        <Link>/ Menu</Link>
        <Link>/{title}</Link>
      </div>
      <div className="CategoryFilter">
        <h3>Kategoriyani tanlang</h3>
        <div className="filter__btns">
          {buttons.map((i, inx) => (
            <button onClick={() => handleClick(i)} key={inx}>
              {i.text}
            </button>
          ))}
        </div>
      </div>
      <div className="heading">{title}</div>
      <div className="Menu__carts">
        {data?.map((item, inx) => (
          <Link key={inx} className="cart__link">
            <div className="cart__img">
              {item?.type && <span>{item.type}</span>}
              <Link to={`/single/${item._id}`}>
                <img src={item?.image} alt={item?.title} />
              </Link>
              <button onClick={() => buyNow(item)} className="shop__item">
                <HiOutlineShoppingBag />
              </button>
            </div>
            <p className="cart__title">{item?.title}</p>
            <span className="cart__description">{item?.description}</span>
            <b className="cart__price">{item?.price} so'm</b>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuTop;
