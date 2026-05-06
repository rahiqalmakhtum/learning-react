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

// export default App;

import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // This runs when the component is unmounted/destroyed, and it removes the event listener to prevent memory leaks.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{windowWidth}</>;
}

export default App;
