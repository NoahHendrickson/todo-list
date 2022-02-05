import { useState, useRef } from "react";
import TodoItem from "./TodoItem";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodo] = useState([]);
  const nameRef = useRef();
  function addItem(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });
  }

  return (
    <div>
      <h1>JUST DO IT</h1>
      <form onSubmit={addItem}>
        <input ref={nameRef} />
        <button type="submit">Add Todo</button>
      </form>
      <TodoItem todos={todos} />
    </div>
  );
}

export default App;
