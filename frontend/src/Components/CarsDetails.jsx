import React from "react";

function CarsDetails({ car }) {
  return (
    <div className="workout-details">
      <h4>{car.title}</h4>
      <p>
        <strong>Total Bill : </strong>
        {car.bill}
      </p>
    </div>
  );
}

export default CarsDetails;
