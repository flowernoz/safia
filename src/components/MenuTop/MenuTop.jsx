import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";
import newYear from "../../assets/banner/yangi-yil.jpeg";
import "./MenuTop.css";
function MenuTop() {
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
    "Yangi yil",
    "Mazali shirinliklar bu yerda",
    "To'g'ri ovqatlanish shirinliklari",
    "Yarimtayyor mahsulotlar",
    "Bar menyusi",
    "Sham otashinlar",
    "Aksiya",
    "Animatorlar yetkaizb berish",
    "Safia store",
  ];
  const yangiYil = [
    { img: newYear },
    { img: newYear },
    { img: newYear },
    { img: newYear },
    { img: newYear },
    { img: newYear },
  ];
  return (
    <div className="Menu">
      <div className="MenuBanner">Yangi yil</div>
      <div className="menuPath">
        <Link> Bosh sahifa </Link>
        <Link>/ Menu</Link>
        <Link>/ Yangi yil</Link>
      </div>
      <div className="CategoryFilter">
        <h3>Kategoriyani tanlang</h3>
        <div className="filter__btns">
          {buttons.map((i, inx) => (
            <button key={inx}>{i}</button>
          ))}
        </div>
      </div>
      <div className="heading">Yangi yil</div>
      <div className="menuCategory">
        {yangiYil.map((i, inx) => (
          <div key={inx} className="category__circle">
            <img src={i.img} alt="" />
          </div>
        ))}
      </div>
      <div className="Menu__carts">
        {arr?.map((item, inx) => (
          <Link key={inx} className="cart__link">
            <div className="cart__img">
              {item?.type && <span>{item.type}</span>}
              <img src={item?.img} alt={item?.title} />
              <button className="shop__item">
                <HiOutlineShoppingBag />
              </button>
            </div>
            <p className="cart__title">{item?.title}</p>
            <span className="cart__description">{item?.desc}</span>
            <b className="cart__price">{item?.price} so'm</b>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuTop;
