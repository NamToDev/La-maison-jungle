import water from "../assets/water.svg";
import sun from "../assets/sun.svg";

function CareScale({ careType, scaleValue }) {
  const range = [1, 2, 3];

  const type =
    careType === "light" ? (
      <img src={sun} alt="Luminisoté" />
    ) : (
      <img src={water} alt="Eau" />
    );

  return (
    <div>
      {range.map(
        (element) =>
          element <= scaleValue && (
            <span key={Math.random() + `${scaleValue.toString()}`}>{type}</span>
          )
      )}
    </div>
  );
}

export default CareScale;
