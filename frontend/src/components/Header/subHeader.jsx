import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

function subHeader() {
  return (
    <div className="subHeader">
      <Link>
        <IoHomeOutline />
        Bosh sahifa
      </Link>
      <Link>
        <CiGrid41 />
        Menyu
      </Link>
      <Link>
        <HiOutlineShoppingBag />
        Savatcha
      </Link>
      <button>
        <FaUser />
        Profil
      </button>
    </div>
  );
}

export default subHeader;
