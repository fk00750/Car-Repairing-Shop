import React, { useState } from "react";

function CarForm() {
  const [title, setTitle] = useState("");
  const [bill, setBill] = useState("");
  const [Error, setError] = useState(null);

  const handleSubmit = async function (e) {
    e.preventDefault();

    const car = { title, bill };

    const response = await fetch("http://localhost:5000/api/CarData", {
      method: "POST",
      body: JSON.stringify(car),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setTitle("");
      setBill("");
      setError(null);
      console.log("New Car is Added");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create">
      <h3>Add a New Car Details</h3>

      <label>Car Name And Model No.</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Car Bill</label>
      <input
        type="number"
        onChange={(e) => setBill(e.target.value)}
        value={bill}
      />

      <button type="submit">Add Car</button>
      {Error && <div className="error">{Error}</div>}
    </form>
  );
}

export default CarForm;
