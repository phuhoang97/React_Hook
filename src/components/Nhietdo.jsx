import React, { useState } from "react";

export default function Nhietdo() {
  const [doC, setDoC] = useState("");
  const [doF, setDoF] = useState("");

  const handleChangeC = (e) => {
    setDoC(e.target.value);
    setDoF(e.target.value * 10 + 10 / 2);
  };

  const handleChangeF = (e) => {
    setDoF(e.target.value);
    setDoC(e.target.value / 10 - 10 * 2);
  };

  return (
    <div>
      <label htmlFor=''>nhiet do C</label>
      <input type='number' value={doC} onChange={handleChangeC} />
      <label htmlFor=''>nhiet do F</label>
      <input type='number' value={doF} onChange={handleChangeF} />
    </div>
  );
}
