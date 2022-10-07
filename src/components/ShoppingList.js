import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import CareScale from "../components/CareScale";

function ShoppingList() {
  const categories = [];
  let cat = "";
  plantList.forEach((plant) => {
    if (plant.category !== cat) {
      categories.push(plant.category);
      cat = plant.category;
    }
  });

  return (
    <div>
      <ul>
        {categories.map((element, index) => (
          <li key={`${element}-${index}`}>{element}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={`${plant.name}-${plant.id}`} className="lmj-plant-item">
            {plant.name}
            {plant.isBestSale && <span>🚀</span>}
            {plant.isSpecialOffer && (
              <div className="lmj-sales">
                Offre speciale !! à vos portefeuilles !!
              </div>
            )}
            <CareScale careType="light" scaleValue={plant.light} />
            <CareScale careType="wather" scaleValue={plant.wather} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
