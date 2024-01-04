import "./Register.css";
import { IoMdClose } from "react-icons/io";
import logoname from "../../assets/logos/logo-name.svg";
import { useState } from "react";
function Register({ openregister }) {
  function sendData() {
    JSON.stringify(localStorage.setItem("user", value));
  }
  const [value, setValue] = useState("+998");
  return (
    <div className="register">
      <div onClick={() => openregister(false)} className="overlay"></div>
      <div className="modal__box">
        <IoMdClose className="closer" onClick={() => openregister(false)} />
        <img src={logoname} alt="" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button onClick={sendData} type="submit">
          davom etish
        </button>
      </div>
    </div>
  );
}

export default Register;
