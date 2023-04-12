import React, { useEffect, useState } from "react";

export default function DemoUseEffect() {
  // Trường hợp 1 là có Cleanup "[]"
  // Trường hợp 2 là không có Cleanup
  const [title, setTitle] = useState();

  // Trường hợp 1:
  // useEffect luôn được gọi khi component mounted
  // Gọi lại callback mỗi khi component re-render
  // Gọi lại callback mỗi khi component được thêm vào DOM
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div>
      {console.log("Component re-render")}
      DemoUseEffect
      <input type='text' onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}

// import React, { useEffect, useState } from "react";

// export default function DemoUseEffect() {
//   const [title, setTitle] = useState();

//   // Trường hợp 2: có cleanUp hay còn gọi là dependencies (deps)
//   // useEffect luôn được gọi mỗi khi component mounted
//   // Chỉ gọi callback 1 lần khi component được mounted
//   useEffect(() => {
//     console.log("Mounted");
//   }, []);

//   return (
//     <div>
//       {console.log("Component re-render")}
//       DemoUseEffect
//       <input type='text' onChange={(e) => setTitle(e.target.value)} />
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// export default function DemoUseEffect() {
//   const [title, setTitle] = useState();
//   const [count, setCount] = useState(0);
//   const [arrList, setArrList] = useState([1, 2, 3, 4]);

//   const handleAddRandom = () => {
//     setArrList([...arrList, Math.floor(Math.random() * 10)]);
//   };

//   // Trường hợp 3: có cleanUp và có dependencies (deps)
//   // useEffect luôn được gọi mỗi khi component mounted
//   // Callback sẽ được gọi mỗi khi deps thay đổi
//   useEffect(() => {
//     console.log(`Mounted`);
//   }, [count, arrList]);

//   return (
//     <div>
//       {console.log("Component re-render")}
//       DemoUseEffect
//       <div>
//         <div>Count: {count}</div>
//         <button onClick={() => setCount(count + 1)}>Up</button>
//         <button onClick={() => setCount(count - 1)}>Down</button>
//       </div>
//       <div>
//         <p>{arrList.toString()}</p>
//         <button onClick={handleAddRandom}>Add Ramdom Number</button>
//       </div>
//     </div>
//   );
// }
