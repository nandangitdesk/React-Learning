import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
      //interview question
      // agar hum 
      // setCount(count+1)
      // setCount(count+1)
      // setCount(count+1)
      // setCount(count+1)
      //to ye sab ek bunch of packets me jayega output same hoga

      //lekin hum
      //setCount((prevState)=>prevState+1)
      //setCount((prevState)=>prevState+1)
      //setCount((prevState)=>prevState+1)
      //setCount((prevState)=>prevState+1)
      //karte hai to ye value prevState me store hoke milegi uski wajah se output side 4 ayega
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
    </div>
  );
}

export default CounterApp;
