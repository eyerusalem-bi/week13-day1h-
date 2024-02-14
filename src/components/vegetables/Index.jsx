

import React, { useState, useEffect } from 'react';

function Index() {
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('/api/vegetables'); 
        const data = await response.json();
        setVegetables(data);
      } catch (error) {
        console.error('Error fetching vegetables:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Vegetables</h1>
      <ul>
        {vegetables.map((vegetable) => (
          <li key={vegetable.id}>
            <a href={`/vegetables/${vegetable.id}`}>{vegetable.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
