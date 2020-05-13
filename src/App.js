import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, addCount] = useState(0);
  return (
    <div className="App">
      <h1>Count-Tracker</h1>
      <div>Button was clicked {count} times</div>
      <button style={buttonStyles} onClick={() => addCount(count + 1)}>Add</button>
      <button onClick={() => addCount(count - 1)}>Subtract</button>
    </div>
  );
};

const buttonStyles =() =>{
  
}

export default App;

//1. Added useState Hooks
//2. initial count state of 0
//3. setState of addCount
//4. Initialize buttons with count functions