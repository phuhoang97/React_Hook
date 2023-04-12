import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (todo, index) => {
    setEditingTodo({
      todo: todo,
      index: index,
    });
    setUpdatedTodo(todo);
  };

  const handleUpdateTodo = () => {
    const newTodos = [...todos];
    newTodos[editingTodo.index] = updatedTodo;
    setTodos(newTodos);
    setEditingTodo(null);
    setUpdatedTodo("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editingTodo && editingTodo.index === index ? (
              <>
                <input
                  value={updatedTodo}
                  onChange={(e) => setUpdatedTodo(e.target.value)}
                />
                <button onClick={handleUpdateTodo}>Update</button>
              </>
            ) : (
              <>
                {todo}
                <button onClick={() => handleEditTodo(todo, index)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
