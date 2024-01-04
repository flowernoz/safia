import Snowfall from "react-snowfall";
const snowflake1 = document.createElement("img");
snowflake1.src =
  "https://www.transparentpng.com/thumb/snow/NRTYeV-big-blue-snowflake-cartoon-drawing-photo-art-colorful-droplet-cloud-sun.png";
const snowflake2 = document.createElement("img");
snowflake2.src =
  "https://static.vecteezy.com/system/resources/thumbnails/013/214/203/small/light-blue-snowflake-icon-winter-concept-new-year-and-christmas-festival-free-png.png";
const snowflake3 = document.createElement("img");
snowflake3.src =
  "https://www.freeiconspng.com/thumbs/snow-icon/snow-icon-15.png";
const images = [snowflake1, snowflake2, snowflake3];
function SnowFall() {
  return (
    <Snowfall
      style={{
        // background: "#fff",
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        color: "red",
      }}
      rotationSpeed={[-1.0, 1.0]}
      changeFrequency={50}
      wind={[-0.1, 0.1]}
      speed={[0.01, 0.1]}
      radius={[13.0, 20.0]}
      snowflakeCount={40}
      images={images}
    ></Snowfall>
  );
}

export default SnowFall;
