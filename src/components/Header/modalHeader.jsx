import { Link } from "react-router-dom";

function modalHeader() {
  return (
    <div className="modalHeader">
      <Link to={"/about"}>Biz haqimizda</Link>
      <Link to={"/menu"}>Menyu</Link>
      <Link to={"/news"}>Yangiliklar</Link>
      <Link to={"/"}>Bizning qadriyatlarimiz</Link>
      <Link to={"/"}>Joylashuvlarimiz</Link>
      <Link to={"/"}>Karyera</Link>
      <Link to={"/"}>Keytring</Link>
      <Link to={"/contact"}>Aloqa</Link>
      <Link to={"/"}>Ommaviy oferta shartlari</Link>
      <Link to={"/"}>FAQ</Link>
    </div>
  );
}

export default modalHeader;
