import { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.css";

function App() {
  // let myObj = {
  //   tittle: "My first NFT",
  //   price: "10.00 ETH",
  // };

  let myArr = [1, 2, 3, 4, 5];

  let [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const removeCounter = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(0);
  };

  return (
    <div className="App">
      <h1 className="text-5xl font-bold text-gray-900 bg-amber-200 p-4 rounded-lg mb-4">
        Tailwind & Props
      </h1>
      <h2 onClick={addCounter}>Counter value {counter}</h2>
      <button onClick={addCounter} className="mr-2 mt-2">
        Add value{" "}
      </button>
      <button onClick={removeCounter}>Remove value </button>
      <footer></footer>
      {/* <Card tittle={myObj.tittle} price={myObj.price} order={myArr} />
      <Card tittle={myObj.tittle} price={myObj.price} order={myArr} />
      <Card tittle={myObj.tittle} price={myObj.price} order={myArr} /> */}
    </div>
  );
}

export default App;
