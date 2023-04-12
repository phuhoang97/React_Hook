// rfc or rsf

import React, { useState } from "react";

function DemoUseState() {
  // useState
  // const [count, setCount] = useState(initialState)
  // count <=> state
  // setCount <=> setState
  // initState => giá trị khởi tạo
  // 2 kiểu dữ liệu chính:
  //    - Kiểu dữ liệu nguyên thủy: Number, String, Boolean, Null, ...
  //    - Kiểu dữ liệu phức tạp: Array, Object

  const [text, setText] = useState("Hello world");
  const [count, setCount] = useState(0);

  // Kiểu dữ liệu phức tạp
  const [arrList, setArrList] = useState([1, 2, 3, 4]);

  const handleChangeText = () => {
    setText("Xin chào mọi người");
  };

  const handleAddRandom = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };

  // obj
  const [objList, setObjList] = useState({ count: 1, arrList: [3, 5, 7] });

  const handleAddNumObj = () => {
    setObjList({
      count: objList.count,
      arrList: [...objList.arrList, Math.floor(Math.random() * 10)],
    });
  };

  return (
    <div>
      <div>
        <h2>Demo useState</h2>
        <h3>Kiểu dữ liệu nguyên thủy</h3>
        <p>Đây là text: {text}</p>
        <button onClick={handleChangeText}>Change Text</button>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Up</button>
        <button onClick={() => setCount(count - 1)}>Down</button>
      </div>

      <div>
        <h3>Kiểu dữ liệu phức tạp</h3>
        <h4>Array</h4>
        <p>{arrList.toString()}</p>
        <button onClick={handleAddRandom}>Add Ramdom Number</button>
      </div>

      <div>
        <h4>Object</h4>
        <p>Count in Obj: {objList.count}</p>
        <button
          onClick={() =>
            setObjList({
              count: objList.count + 1,
              arrList: objList.arrList,
            })
          }
        >
          Up in Obj
        </button>
        <button
          onClick={() =>
            setObjList({
              count: objList.count - 1,
              arrList: objList.arrList,
            })
          }
        >
          Down in Obj
        </button>

        <p>Array in Obj: {objList.arrList.toString()}</p>
        <button onClick={handleAddNumObj}>Add Random Number in Obj</button>
      </div>
    </div>
  );
}

export default DemoUseState;
