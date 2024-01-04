import "./task_input.css";
import { useState } from "react";

export default function TaskInput() {
  const [newTask, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newTask);
  }

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
