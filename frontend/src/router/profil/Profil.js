import "./Profil.css";
import avatar from "../../assets/logos/avatar.svg";
function Profil() {
  document.querySelector("header").classList.add("bgwhite");
  // let data = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="profil">
      <div className="profil__data">
        <div className="profil__logo">
          <img src={avatar} alt="image" />
          <p>Gulnoza</p>
        </div>
        <div className="profil__info">
          <h2>Shaxsiy ma'lumotlar</h2>
          <span>
            Familiyangiz
            <b></b>
          </span>
          <span>
            telefon raqamingiz
            <b></b>
          </span>
          <span>
            ro'yxatdan o'tgan sana
            <b></b>
          </span>
        </div>
        <div className="bonus"></div>
      </div>
      <div className="shopping__history">
        <h1>Buyurtma tarixi</h1>
      </div>
      <p></p>
    </div>
  );
}

export default Profil;
