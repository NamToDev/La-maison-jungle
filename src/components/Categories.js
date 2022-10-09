import "../styles/Categories.css";

function Categories({ categories, setCatState }) {
  return (
    <div className="lmj-categories">
      <select
        onChange={(e) => setCatState(e.target.value)}
        className="lmj-categories-select"
      >
        <option key={"default79907"}> </option>
        {categories.map((cat, index) => (
          <option key={`${cat}-${index}`}>{cat}</option>
        ))}
      </select>
      <button onClick={() => setCatState("")}>Renitialiser</button>
    </div>
  );
}

export default Categories;
