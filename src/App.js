import React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const startVal = 0;
  const [initialVal, changeVal] = useState(startVal);
  const increaseByFive = () => {
    for (var i = 0; i < 5; i++) {
      changeVal((prevVal) => {
        return prevVal + 1;
      });
    }
  };
  // not decrease more then below 0
  const mindecrese = () => {
    changeVal((prevVal) => {
      if (prevVal <= 0) {
        return prevVal;
      } else {
        return prevVal - 1;
      }
    });
  };
  return (
    <div>
      <center>
        <h1>Understanding useState with Previus value</h1>

        <button onClick={() => changeVal(initialVal + 1)}>Increase</button>
        <button onClick={mindecrese}>decrease</button>
        <button onClick={() => changeVal(startVal)}>reset</button>
        <button onClick={increaseByFive}>increase by five</button>
      </center>
      <h1>
        <center>{initialVal}</center>
      </h1>
    </div>
  );
}
