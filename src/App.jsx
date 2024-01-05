import "./index.css";

function App() {
  return (
    <>
      <div className="task-input-container">
        <form action="">
          <input type="text" id="item" />
          <button>+</button>
        </form>
      </div>
      <ul className="all-tasks">
        <li>
          <input type="checkbox" id="" />
          <p>Task</p>
        </li>
        <li>
          <input type="checkbox" id="" />
          <p>Task</p>
        </li>
        <li>
          <input type="checkbox" id="" />
          <p>Task</p>
        </li>
      </ul>
    </>
  );
}

export default App;
