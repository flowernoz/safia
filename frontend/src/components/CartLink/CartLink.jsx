import { Link } from "react-router-dom";
import "./CartLink.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

function CartLink({ title, data }) {
  return (
    <div className="cartLinks">
      <h2 className="heading">{title}</h2>
      <div className="products_cart">
        {data?.reverse()?.map((item, inx) => (
          <Link key={inx} className="cart__link">
            <div className="cart__img">
              {item?.type && <span>{item.type}</span>}
              <img src={item?.image} alt={item?.title} />
              <button className="shop__item">
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

export default CartLink;
