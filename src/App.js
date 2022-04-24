import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addCounter = ()=>{
    setCount(count + 1)
  }
  const subtractCounter = ()=>{
    setCount(count - 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <div>
            <h1 className="Count">{count}</h1>
            <button onClick={addCounter}>+</button>
            <button onClick={subtractCounter}>-</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
