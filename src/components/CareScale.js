function CareScale({ careType, scaleValue }) {
  const range = [1, 2, 3];

  const type = careType === "light" ? "☀️" : "💦";

  return (
    <div>
      {range.map(
        (element) =>
          element >= scaleValue && (
            <span key={scaleValue.toString()}>{type}</span>
          )
      )}
    </div>
  );
}

export default CareScale;
