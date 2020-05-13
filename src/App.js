import React, { useState } from "react";
import "./App.css";
import "./tailwind.generated.css";

const App = () => {
  const [count, addCount] = useState(0);
  return (
    <div className="App max-w-sm rounded overflow-hidden shadow-lg">
      <div className=" px-6 py-4">
        <h1 className="font-bold text-xl mb-2">Count-Tracker</h1>
        <div className="text-gray-700 text-base">
          Button was clicked {count} times
        </div>
        <button
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          onClick={() => addCount(count + 1)}
        >
          Add
        </button>
        <button
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          onClick={() => addCount(count - 1)}
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default App;

//1. Added useState Hooks
//2. initial count state of 0
//3. setState of addCount
//4. Initialize buttons with count functions
