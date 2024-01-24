import { useNavigate } from "react-router-dom";
import EmptyImg from "../../../assets/logos/logo.svg";
import "./Empty.css";

const Empty = () => {
  const navigate = useNavigate();
  return (
    <div className="empty">
      <h1>Oh!</h1>
      <img src={EmptyImg} alt="empty img" />
      <p>Xechnarsa topilmadi</p>
      <h2 onClick={() => navigate("/menu")}>Menyuga Qaytish</h2>
    </div>
  );
};
export default Empty;
