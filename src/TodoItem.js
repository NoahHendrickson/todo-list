import "./App.css";
import React from "react";
import Todo from "./Todo.js";

const TodoItem = ({ todos }) => {
  return todos.map((todos) => {
    return <Todo key={todos.id} todos={todos} />;
  });
};

export default TodoItem;
