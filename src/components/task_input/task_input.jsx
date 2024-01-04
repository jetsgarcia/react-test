import "./task_input.css";
import { useState, useRef } from "react";

export default function TaskInput() {
  const [newTask, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  let idCounter = useRef(10000);

  function generateId() {
    idCounter.current += 1;
    return idCounter.current;
  }

  function getYear() {
    return new Date().getFullYear().toString();
  }

  function handleSubmit(e) {
    let id = getYear() + generateId();
    e.preventDefault();
    setTask("");

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: id,
          title: newTask,
          completed: false,
        },
      ];
    });
  }

  console.log(todos);

  return (
    <div className="wrapper">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your new task here"
          className="task-input-field"
          value={newTask}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="add-button">
          +
        </button>
      </form>
    </div>
  );
}
