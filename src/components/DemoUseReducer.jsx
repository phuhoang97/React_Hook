import React, { useReducer } from "react";

export default function DemoUseReducer() {
  // Trong react hook, useReducer được cung cấp để thay thế cho useState
  // useState được sử dụng trong các component đơn giản
  // Còn useReducer được sử dụng trong các component phức tạp
  // (ví dụ: array obj lồng nhau or nhiều cấp arr obj)
  // useState
  // 1. InitState: 0
  // 2. Action: (state + 1) - Up, (state - 1) - Down
  // const [count, setCount] = useState(0);

  // useReducer
  // 1. InitState: 0
  // 2. Action: (state + 1) - Up, (state - 1) - Down
  // 3. Reducer
  // 4. dispatch

  // Bước 1: Khởi tạo giá trị initState
  const initState = 0;

  // Bước 2: Action
  const UP_ACTION = "up_action";
  const DOWN_ACTION = "down_action";

  // Bước 3: Reducer
  // Trong hàm reducer sẽ nhận 2 tham số:
  // 1 là state hiện tại
  // 2 là action
  const reducer = (state, action) => {
    console.log("reducer run");
    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      default:
        throw new Error("Không có action tương ứng");
    }
  };

  // Bước 4: Dispatch
  // Khi component được chạy lần đầu thì sẽ chạy đến useReducer nhưng
  // không chạy đến reducer mà chỉ chạy initState
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
}
