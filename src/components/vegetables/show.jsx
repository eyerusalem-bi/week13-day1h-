// components/vegetables/Show.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Show() {
  const [vegetable, setVegetable] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch vegetable data by ID and update state
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/vegetables/${id}`); // Assuming you have an API endpoint for fetching a single vegetable
        const data = await response.json();
        setVegetable(data);
      } catch (error) {
        console.error(`Error fetching vegetable with ID ${id}:`, error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Vegetable Details</h1>
      {vegetable ? (
        <div>
          <h2>{vegetable.name}</h2>
          <p>Color: {vegetable.color}</p>
          <p>Ready to Eat: {vegetable.readyToEat ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Show;
