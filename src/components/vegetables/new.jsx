// components/vegetables/New.jsx

import React, { useState } from 'react';

function New() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [readyToEat, setReadyToEat] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation and submit form data to create a new vegetable
    try {
      const response = await fetch('/api/vegetables', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, color, readyToEat }),
      });
      if (response.ok) {
        // Redirect user to index page after successful creation
        window.location.href = '/vegetables';
      } else {
        console.error('Failed to create vegetable');
      }
    } catch (error) {
      console.error('Error creating vegetable:', error);
    }
  };

  return (
    <div>
      <h1>New Vegetable</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Ready to Eat:
          <input
            type="checkbox"
            checked={readyToEat}
            onChange={(e) => setReadyToEat(e.target.checked)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default New;
