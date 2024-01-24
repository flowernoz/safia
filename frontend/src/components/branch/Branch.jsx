import "./Branch.css";
import { IoMdClose } from "react-icons/io";

function Branch({ openregister }) {
  const data = [
    {
      country: "O'ZBEKISTON",
      region: [
        "Toshkent",
        "Andijon",
        "Namangan",
        "Farg'ona",
        "Buxoro",
        "Qarshi",
      ],
    },
    {
      country: "QOZOG'ISTON",
      region: ["Shimkent", "Astana"],
    },
    {},
  ];
  function setlocation(region) {
    JSON.stringify(localStorage.setItem("branch", region));
  }
  return (
    <div className="branch">
      <div onClick={() => openregister(false)} className="overlay"></div>
      <div className="modal__box">
        <IoMdClose className="closer" onClick={() => openregister(false)} />
        <h1>Shaharni tanlang</h1>
        {data.map((item, inx) => (
          <div key={inx} className="places">
            <span>{item.country}</span>
            <div className="places__item">
              {item?.region?.map((item, inx) => (
                <ul className="branches" key={inx}>
                  <li onClick={() => setlocation(item)}>{item}</li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branch;
