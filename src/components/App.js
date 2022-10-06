import React from "react";
import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Cart />
      <ShoppingList />
    </React.Fragment>
  );
}

export default App;
