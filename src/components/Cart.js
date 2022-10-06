import "../styles/Cart.css";

function Cart() {
  const monstera = 8;
  const lierre = 10;
  const bouquet = 15;
  const total = monstera + lierre + bouquet;

  return (
    <div className="lmj-cart">
      <h2>Pannier</h2>
      <ul>
        <li>Monstera : {monstera} €</li>
        <li>Lierre : {lierre} €</li>
        <li>Bouquet de fleurs : {bouquet} €</li>
      </ul>
      <p>TOTAL : {total} €</p>
    </div>
  );
}

export default Cart;
