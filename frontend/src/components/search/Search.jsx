import axios from "../../api";
import { useEffect, useState } from "react";
import "./search.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
function Search({ openregister }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [suggested, setSuggested] = useState([]);
  useEffect(() => {
    axios
      .get("/pro/allProducts")
      .then((res) => {
        setSuggested(res.data.innerData);
      })
      .catch((res) => console.log(res));
  }, []);
  function searchPro(e) {
    setValue(e);
    axios
      .post("/pro/search", { word: e })
      .then((res) => {
        setResult(res.data.innerData);
      })
      .catch((res) => console.log(res));
  }
  return (
    <div className="search">
      <form className="searchForm">
        <div className="serchInput">
          <IoMdClose onClick={() => openregister(false)} />
          <input
            type="text"
            placeholder="search..."
            value={value}
            onChange={(e) => searchPro(e.target.value)}
          />
        </div>
        <ul className="searchresults">
          {suggested.map((i, inx) => (
            <li
              key={inx}
              onClick={() => {
                searchPro(i.name);
                setValue(i.name);
              }}
            >
              {i.name}
            </li>
          ))}
        </ul>
        <div className="results">
          {result?.map((i, inx) => (
            <Link key={inx} to={`/single/:${i._id}`}>
              {i.name}
            </Link>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Search;
