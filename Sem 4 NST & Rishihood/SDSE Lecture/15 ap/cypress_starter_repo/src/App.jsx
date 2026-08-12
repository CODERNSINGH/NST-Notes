import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a Todo App" }
  ]);

  const addTodo = () => {
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: trimmedTask
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Todo App</h1>

        <div className="todo-input-section">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && <p className="empty-message">No todos yet</p>}
      </div>
    </div>
  );
}

export default App;