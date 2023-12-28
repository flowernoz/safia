import "./Register.css";
import { IoMdClose } from "react-icons/io";
import logoname from "../../assets/logos/logo-name.svg";
function Register({ setOpenRegister }) {
  return (
    <div className="register">
      <div className="overlay"></div>
      <div className="modal__box">
        <IoMdClose onClick={() => setOpenRegister(false)} />
        <img src={logoname} alt="" />
        <input placeholder="+998 " type="text" />
        <button type="submit">davom etish</button>
      </div>
    </div>
  );
}

export default Register;
