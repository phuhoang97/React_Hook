import React, { useState } from "react";

function FormUseState(props) {
  // khởi tạo giá trị
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // lấy giá trị input
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  // xử lí sự kiện submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Name</label>
        <input onChange={handleChangeName} value={name} type='text' />
        <label htmlFor=''>Email</label>
        <input onChange={handleChangeEmail} value={email} type='text' />
        <label htmlFor=''>Phone</label>
        <input onChange={handleChangePhone} value={phone} type='text' />
        <input type='submit' value={"Bấm zô"} />
      </form>
    </div>
  );
}

export default FormUseState;
