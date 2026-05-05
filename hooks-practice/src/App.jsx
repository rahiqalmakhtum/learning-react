// =================useState Hook========================
// import React from "react";
// import { useState } from "react";

// function App() {
//   const [value, setValue] = useState({ count: 4, theme: "blue" });
//   const count = value.count;
//   const theme = value.theme;

//   const addValue = () => {
//     setValue((prev) => {
//       return { ...prev, count: prev.count + 1 };
//     });
//   };
//   const removeValue = () => {
//     setValue((prev) => {
//       return { ...prev, count: prev.count - 1 };
//     });
//   };

//   return (
//     <>
//       <button onClick={addValue}>+</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button onClick={removeValue}>-</button>
//     </>
//   );
// }

// export default App;
// =================useState Hook========================