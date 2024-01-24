import "./Register.css";
import { IoMdClose } from "react-icons/io";
import logoname from "../../assets/logos/logo-name.svg";
import { useState } from "react";
import axios from "../../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register({ openregister }) {
  function sendData() {
    let userData = {
      phone,
      firstname,
      lastname,
    };

    console.log(userData);
    axios
      .post("/user/create", userData)
      .then((res) => {
        if (res.data.text == "found") {
          localStorage.setItem("userInfo", JSON.stringify(res.data.innerData));
          return toast.success(res.data.msg);
        }
      })
      .catch((res) => console.log(res));
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setTimeout(() => openregister(false), 2500);
  }

  const [phone, setPhone] = useState("+998");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  return (
    <div className="register">
      <ToastContainer />
      <div onClick={() => openregister(false)} className="overlay"></div>
      <div className="modal__box">
        <IoMdClose className="closer" onClick={() => openregister(false)} />
        <img src={logoname} alt="" />
        <input
          required
          value={firstname}
          placeholder="Ismingiz"
          onChange={(e) => setFirstname(e.target.value)}
          type="text"
        />
        <input
          required
          value={lastname}
          placeholder="Familiyangiz"
          onChange={(e) => setLastname(e.target.value)}
          type="text"
        />
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
