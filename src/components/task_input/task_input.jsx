import "./task_input.css";

export default function TaskInput() {
  return (
    <div className="wrapper">
      <form className="task-form">
        <input
          type="text"
          placeholder="Type your new task here"
          className="task-input-field"
        />
        <button className="add-button">+</button>
      </form>
    </div>
  );
}
