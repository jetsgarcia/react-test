import "./task.css";

export default function Task() {
  return (
    <div className="task">
      <input type="checkbox" className="checker" />
      <div>
        <p className="description">Task Description</p>
      </div>
    </div>
  );
}
