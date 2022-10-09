import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

function App() {
  const [cart, updateCart] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("cart"))) {
      updateCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList updateCart={updateCart} cart={cart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
