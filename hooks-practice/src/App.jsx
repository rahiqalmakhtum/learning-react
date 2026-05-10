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

//==================useEffect Hook=======================
// import React from "react";
// import { useState, useEffect } from "react";

// function App() {
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([]);

//   console.log("render");

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));
//   }, [resourceType]);
//   return (
//     <>
//       <button onClick={() => setResourceType("Posts")}>Posts</button>
//       <button onClick={() => setResourceType("Users")}>Users</button>
//       <button onClick={() => setResourceType("Comments")}>Comments</button>
//       <h1>{resourceType}</h1>
//       {items.map((items) => {
//         return <pre>{JSON.stringify(items)}</pre>;
//       })}
//     </>
//   );
// }

// // export default App;

// import React from "react";
// import { useState, useEffect } from "react";

// function App() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     // This runs when the component is unmounted/destroyed, and it removes the event listener to prevent memory leaks.
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <>{windowWidth}</>;
// }

// export default App;
//==================useEffect Hook=======================

//==================useEffect Hook Infinite Loop - The Problem =======================
// import React from "react";
// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, [count]);

//   return (
//     <>
//       <h1>I rendered {count} times</h1>
//     </>
//   );
// }

// export default App;

import React, { useRef } from "react";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>My name is {name}</h1>
      <h1>I rendered {renderCount.current} times</h1>
    </>
  );
}
export default App;
