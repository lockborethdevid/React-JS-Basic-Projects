import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const removeTour = (id) => {
    const newTour = tour.filter((eachTour) => eachTour.id !== id);
    setTour(newTour);
  };

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      setTour(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else if (tour.length === 0) {
    return (
      <main className="title">
        <h2>No Tour left</h2>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tour} removeTour={removeTour} />
      </main>
    );
  }
}

export default App;
