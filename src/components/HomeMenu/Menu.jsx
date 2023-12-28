import { Link } from "react-router-dom";
import "./Menu.css";
import menu1 from "../../assets/menu/menuTort.png";
import menu2 from "../../assets/menu/menukattaTort.png";
import menu3 from "../../assets/menu/menuPirojniy.png";
import menu4 from "../../assets/menu/menuPechene.png";
import menu5 from "../../assets/menu/menuQatlama.png";
function Menu() {
  const links = [
    { img: menu1, title: "Dumaloq tortlar" },
    { img: menu2, title: "Katta tortlar" },
    { img: menu3, title: "Pirojniylar" },
    { img: menu4, title: "Pechenye" },
    { img: menu5, title: "Qatlamali pishiriqlar" },
  ];
  return (
    <div className="menu">
      <Link to={"/menu"}>
        <button className="menuButton">...</button> Menyu
      </Link>
      <div className="menu__categories">
        {links.map((item, inx) => (
          <Link className="categories__link" key={inx}>
            <img src={item.img} alt={item.title} />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
