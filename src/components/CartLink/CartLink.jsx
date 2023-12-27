import { Link } from "react-router-dom";
import "./CartLink.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

function CartLink() {
  return (
    <Link className="cart__link">
      <img src="" alt="" />
      <p className="cart__title"></p>
      <span className="cart__description"></span>
      <b className="cart__price"></b>
      <button className="shop__item">
        <HiOutlineShoppingBag />
      </button>
    </Link>
  );
}

export default CartLink;
