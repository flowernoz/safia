import { TbX } from "react-icons/tb";
import Empty from "./empty/Empty";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Cart.css";
import { useCart } from "../../redux/selectors";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {
  ClearCart,
  DecrementCart,
  IncrementCart,
  RemoveFromCart,
} from "../../redux/cart";
import Register from "../../components/Register/Register";
import axios from "../../api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = () => {
  const [openregister, setOpenRegister] = useState(false);
  const dispatch = useDispatch();
  const cart = useCart();

  function incrementCart(id) {
    dispatch(IncrementCart({ id }));
  }
  function decrementCart(id) {
    dispatch(DecrementCart({ id: id }));
  }
  function deleteCart(id) {
    console.log(id);
    dispatch(RemoveFromCart(id));
  }

  let totalPrice = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  // buy

  const checkout = () => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      toast.warn("Iltimos, avval ro'yhatdan o'ting", {
        position: "top-center",
        hideProgressBar: true,
      });
      // setOpenRegister(!openregister);
    } else {
      let user = { ...userInfo, totalPrice, products: cart };
      axios
        .patch("/user/update", user)
        .then((res) => {
          if (res.data?.status === "success") {
            toast.success("Savat bo'shatildi");
            return dispatch(ClearCart());
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return cart.length ? (
    <div className="cart__wrapper container">
      <ToastContainer />
      {openregister && <Register openregister={setOpenRegister} />}
      <h2>SAVATCHA</h2>
      <div className="cart__products">
        <div className="cart__products_top">
          <ul>
            <li>Tovar</li>
            <li>Narxi</li>
            <li>Miqdori</li>
            <li>Jami</li>
            <li>Ochirish</li>
          </ul>
        </div>
        <div className="cart__products_body">
          {cart?.map((el, inx) => (
            <div key={inx} className="cart__products_product">
              <div className="cart__products_product_img">
                <img src={el?.image} alt="product img" />
              </div>
              <div className="cart__products_product_title">
                <p>{el?.name}</p>
                <span>{el?.description}</span>
              </div>
              <div className="cart__products_product_price">
                <p>{el?.price} so'm</p>
              </div>
              <div className="cart__products_product_quantity">
                <button onClick={() => decrementCart(el._id)}>
                  <FaMinus />
                </button>
                <span>{el?.quantity}</span>
                <button onClick={() => incrementCart(el._id)}>
                  <FaPlus />
                </button>
              </div>
              <div className="cart__products_product_total">
                <p>{el?.price * el?.quantity} so'm</p>
              </div>
              <div className="cart__products_product_delete">
                <TbX onClick={() => deleteCart(el?._id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart__products_bottom">
        <div className="cart__products_bottom_order-view">
          <p>Jami:</p>
          <p>{totalPrice} s'om</p>
        </div>
        <button onClick={checkout}>Sotib olish</button>
      </div>
    </div>
  ) : (
    <Empty />
  );
};
export default Cart;
