import "./Register.css";
import { IoMdClose } from "react-icons/io";
import logoname from "../../assets/logos/logo-name.svg";
function Register() {
  return (
    <div className="register">
      <div className="overlay"></div>
      <div className="modal__box">
        <IoMdClose />
        <img src={logoname} alt="" />
        <input type="text" />
        <button type="submit">davom etish</button>
      </div>
    </div>
  );
}

export default Register;
