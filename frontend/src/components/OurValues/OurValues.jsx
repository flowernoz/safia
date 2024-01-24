import "./OurValues.css";
import value1 from "../../assets/values/value1.png";
import value2 from "../../assets/values/value2.png";
import value3 from "../../assets/values/value3.png";
function OurValues() {
  const data = [
    {
      img: value1,
      title: "Atrof muhit",
      desc: "Safia kelajak haqida qayg'uradi",
    },
    {
      img: value2,
      title: "Oila",
      desc: "Oilaviy qadriyatlarni asrab, odamlar hayotini bayramga aylantiramiz",
    },
    {
      img: value3,
      title: "Inklyuziya",
      desc: "Hamma uchun teng imkoniyatlar",
    },
  ];
  return (
    <div className="OurValues">
      <h2 className="heading">BIZNING QADRIYATLARIMIZ</h2>
      <div className="value__carts">
        {data.map((item, inx) => (
          <div key={inx} className="value__item">
            <img src={item.img} alt="" />
            <p className="cart__title">{item.title}</p>
            <span className="cart__description">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurValues;
