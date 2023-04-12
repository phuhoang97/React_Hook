import React, { useState } from "react";

function TaskList() {
  // Khai báo 2 state
  // State => task là nhận các giá trị nhập vào từ ô input
  const [task, setTask] = useState("");
  // State 2 => Dùng để lưu các giá trị đó vào mảng
  const [newTask, setNewTask] = useState([]);

  // Lấy các giá trị từ ô input
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Lưu task bằng cách clone mảng cũ và thêm giá trị mới nhập vào
  const addButton = () => {
    setNewTask([...newTask, task]);
  };

  return (
    <div>
      <input type='text' onChange={handleChange} value={task} />
      <button onClick={addButton}>Add</button>
      <div>
        {/* Hiển thị list task từ ô input */}
        {newTask.map((e) => (
          <li>{e}</li>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
