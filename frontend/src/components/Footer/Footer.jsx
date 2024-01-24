import { FaFacebookSquare, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import asImg from "../../assets/footer/as-link.svg";
import gpImg from "../../assets/footer/gp-link.svg";
import logoImg from "../../assets/logos/logo.svg";
import "./Footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer_top">
          <div className="footer__left">
            <img src={logoImg} alt="logo img" />
          </div>
          <div className="footer__center">
            <div className="foooter__center_links">
              <p>Kompaniya haqida</p>
              <ul>
                <li>Biz haqimizda</li>
                <li>Kaera</li>
                <li>Keytring</li>
                <li>Joylashuvlarimiz</li>
              </ul>
            </div>
            <div className="foooter__center_links">
              <p>Ma'lumotlar</p>
              <ul>
                <li>Menyu</li>
                <li>Yangiliklar</li>
                <li>Aloqa</li>
                <li>Ommaviy foydalanish shartlari</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__right_phone_info">
              <p>Aloqa</p>
              <h3>78 113 40 40</h3>
            </div>
            <div className="footer__right_social_links">
              <FaFacebookSquare />
              <FaInstagram />
              <FaTelegramPlane />
            </div>
            <div className="footer__right_download">
              <img src={gpImg} alt="google play img" />
              <img src={asImg} alt="app store img" />
            </div>
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footer__bottom">
          <p>{year} Safia Cafe & Bakery. Barcha haq-huquqlar ximoyalangan</p>
          <p>Ishlab chiquvchi Exord Soft</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
