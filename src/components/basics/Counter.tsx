import { useState } from 'react';

export default function Counter() {
  //parameter is the initial value of the state
  //count can only be updated using setCount
  //count is reset once the page is refreshed
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(2);

  function incrementClick() {
    setCount(count + incrementBy);
  }

  function decrementClick() {
    setCount(count - incrementBy);
  }

  function increaseIncrementClick() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrementClick() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={incrementClick}>+</button>
      <button onClick={decrementClick}>-</button>

      <h1>Increment by: {incrementBy}</h1>
      <button onClick={increaseIncrementClick}>+</button>
      <button onClick={decreaseIncrementClick}>-</button>
    </div>
  );
}
