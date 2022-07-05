import { useEffect, useState } from "react";
import CarForm from "../Components/CarForm";
import CarsDetails from "../Components/CarsDetails";

function Home() {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const fetchCarsDATA = async function () {
      const response = await fetch("http://localhost:5000/api/CarData");
      const json = await response.json();

      if (response.ok) {
        setCars(json);
      }
    };

    fetchCarsDATA();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {cars &&
          cars.map((car) => {
            return <CarsDetails key={car._id} car={car}/>;
          })}
      </div>
      <CarForm/>
    </div>
  );
}

export default Home;
