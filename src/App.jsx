import { useState } from "react";
import "./index.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), description: newItem, completed: false },
    ]);
    setNewItem("");
  }

  console.log(todos);
  return (
    <>
      <div className="task-input-container">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit">+</button>
        </form>
      </div>
      <ul className="all-tasks">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" id="" value={todo.completed} />
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
