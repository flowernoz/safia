import { Link } from "react-router-dom";
import "./Menu.css";
import menu1 from "../../assets/menu/menuTort.png";
import menu2 from "../../assets/menu/menukattaTort.png";
import menu3 from "../../assets/menu/menuPirojniy.png";
import menu4 from "../../assets/menu/menuPechene.png";
import menu5 from "../../assets/menu/menuQatlama.png";
function Menu() {
  return (
    <div>
      <Link to={"/menu"}>
        <button>...</button> Menyu
      </Link>
      <div className="menu__categories">
        <Link>
          <img src={menu1} alt="Dumaloq tortlar" /> Dumaloq tortlar
        </Link>
        <Link>
          <img src={menu2} alt="Katta tortlar" />
          Katta tortlar
        </Link>
        <Link>
          <img src={menu3} alt="Pirojniylar" />
          Pirojniylar
        </Link>
        <Link>
          <img src={menu4} alt="Pechenye" />
          Pechenye
        </Link>
        <Link>
          <img src={menu5} alt="Qatlamali pishiriqlar" />
          Qatlamali pishiriqlar
        </Link>
      </div>
    </div>
  );
}

export default Menu;
