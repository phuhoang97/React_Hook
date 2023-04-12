import React, { useReducer } from "react";

export default function DemoAgain() {
  const initial = 0;

  const UP_ACTION = "up";
  const DOWN_ACTION = "down";
  const RANDOM_ACTION = "random";

  const reducer = (state, action) => {
    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      case RANDOM_ACTION:
        return [state + "," + Math.floor(Math.random() * 10)];
      default:
        throw new Error(" không có action tương ứng ");
    }
  };
  const [count, dispatch] = useReducer(reducer, initial);

  return (
    <div>
      <p> {count}</p>
      <button onClick={() => dispatch(UP_ACTION)}>UP_BUTTON</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>DOWN_BUTTON</button>
      <button onClick={() => dispatch(RANDOM_ACTION)}>ACTION_RANDOM</button>
    </div>
  );
}
