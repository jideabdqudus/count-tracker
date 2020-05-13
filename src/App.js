import React, { useState } from "react";
import "./App.css";
import './tailwind.generated.css';

const App = () => {
  const [count, addCount] = useState(0);
  return (
    <div className="App">
      <h1>Count-Tracker</h1>
      <div>Button was clicked {count} times</div>
      <button className={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"} onClick={() => addCount(count + 1)}>Add</button>
      <button onClick={() => addCount(count - 1)}>Subtract</button>
    </div>
  );
};


export default App;

//1. Added useState Hooks
//2. initial count state of 0
//3. setState of addCount
//4. Initialize buttons with count functions