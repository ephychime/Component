import React, { useState } from 'react';

function Counter() {
  // Create a state variable to store the count
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increaseCount = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  // Function to decrease the count
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increaseCount} disabled={count >= 20}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default Counter;
