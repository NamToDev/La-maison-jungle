import { plantList } from "../datas/plantList";
import { useState } from "react";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

function ShoppingList({ updateCart, cart }) {
  const categories = [];
  const [catState, setCatState] = useState("");
  let cat = "";
  plantList.forEach((plant) => {
    if (plant.category !== cat) {
      categories.push(plant.category);
      cat = plant.category;
    }
  });

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div>
      <Categories categories={categories} setCatState={setCatState} />
      <ul className="lmj-plant-list">
        {plantList.map((plant) =>
          catState === "" ? (
            <div key={plant.id}>
              <PlantItem
                name={plant.name}
                id={plant.id}
                cover={plant.cover}
                light={plant.light}
                wather={plant.wather}
                price={plant.price}
              />
              <button onClick={() => addToCart(plant.name, plant.price)}>
                Ajouter
              </button>
            </div>
          ) : (
            plant.category === catState && (
              <div key={plant.id}>
                <PlantItem
                  name={plant.name}
                  id={plant.id}
                  cover={plant.cover}
                  light={plant.light}
                  wather={plant.wather}
                  price={plant.price}
                />
                <button onClick={() => addToCart(plant.name, plant.price)}>
                  Ajouter
                </button>
              </div>
            )
          )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
