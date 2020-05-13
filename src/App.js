import React, {useState} from 'react';
import './App.css';

const App =()=> {

  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
        <h1>Hello World</h1>
        {setCount}     
    </div>
  );
}

export default App;


//1. Added useState Hooks