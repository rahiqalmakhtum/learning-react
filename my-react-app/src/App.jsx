import { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let myObj = {
    tittle: "My first NFT",
    price: "10.00 ETH",
  };

  let myArr = [1, 2, 3, 4, 5];

  const addValue = () => {
    // counter++;
    setCounter(counter + 1) + 1;
    console.log("Counter after increment:", counter);
  };

  const removeValue = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(0);

    console.log("Counter after decrement:", counter);
  };

  return (
    <div className="App">
      <h1 className="text-5xl font-bold text-gray-900 bg-amber-200 p-4 rounded-lg mb-4">
        Tailwind & Props
      </h1>
      {/* <h2>Counter value {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <footer>{counter}</footer> */}
      <Card tittle={myObj.tittle} price={myObj.price} order={myArr} />
      <Card tittle={myObj.tittle} price={myObj.price} order={myArr} />
      <Card tittle={myObj.tittle} price={myObj.price} order={myArr} />
    </div>
  );
}

export default App;
