import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    // counter++;
    setCounter(counter + 1) + 1;
    console.log("Counter after increment:", counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log("Counter after decrement:", counter);
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <footer>{counter}</footer>
    </div>
  );
}

export default App;
