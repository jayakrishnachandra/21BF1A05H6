import React from 'react';

function AverageDisplay({ prevState, currState, numbers, average }) {
  return (
    <div>
      <h2>Previous State:</h2>
      <p>{prevState}</p>
      <h2>Current State:</h2>
      <p>{currState}</p>
      <h2>Numbers:</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h2>Average:</h2>
      <p>{average}</p>
    </div>
  );
}

export default AverageDisplay;
