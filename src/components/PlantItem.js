import CareScale from "../components/CareScale";
import "../styles/PlantItem.css";

function PlantItem({ name, cover, id, light, wather, price }) {
  const freq = (prop) => {
    let res = "";
    switch (prop) {
      case 1:
        res = "peu";
        break;
      case 2:
        res = "modérement";
        break;
      case 3:
        res = "beaucoup";
        break;
      default:
    }
    console.log(prop);
    return res;
  };

  function handleClick(type, value) {
    alert(
      `Cette plante requiert ${freq(type)} ${
        value === "light" ? "de lumière ✨" : "d'arosage 💧"
      }`
    );
  }

  return (
    <li key={id} className="lmj-plant-item">
      {name}
      <span className="lmj-plant-item-price">{price} €</span>
      <img src={cover} alt={name} className="lmj-plant-item-cover" />
      <div onClick={() => handleClick(light, "light")}>
        <CareScale careType="light" scaleValue={light} />
      </div>
      <div onClick={() => handleClick(wather, "wather")}>
        <CareScale careType="wather" scaleValue={wather} />
      </div>
    </li>
  );
}

export default PlantItem;
