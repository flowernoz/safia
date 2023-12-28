import "./About.css";
import about from "../../assets/aboutUs.png";
import sign from "../../assets/logos/sign.png";
import Detailed from "../detailed/Detailed";
function About() {
  return (
    <div className="about__us">
      <h2 className="heading">BIZ HAQIMIZDA</h2>
      <div className="about__info">
        <img src={about} alt="office" />
        <div className="our_history">
          <h3 className="heading">Bizning tariximiz</h3>
          <span className="cart__description">
            Biz haqimizda Safia qandolat mahsulotlari tarmogʻi – bu oilaviy
            korxona, uning tarixi havaskor qandolatchi Muxayo Ayupovadan
            boshlanadi. Uning mehnatsevarligi va uy pishirigʻiga boʻlgan
            muhabbati uni 2001-yilda oilaviy oshxona doirasidan tashqariga
            chiqib, avval qarindoshlari, doʻstlari va qoʻshnilariga sotish uchun
            pishirishni boshlashga undadi. Turmush oʻrtogʻi Akmal Ayupov
            Muxayoning ijodiy faoliyatini qoʻllab-quvvatlaydi va tayyor
            mahsulotlarni yetkazib berishni tashkil qiladi.
          </span>
          <div className="sign">
            <img src={sign} alt="signature" />
          </div>
        </div>
        <Detailed />
      </div>
    </div>
  );
}

export default About;
