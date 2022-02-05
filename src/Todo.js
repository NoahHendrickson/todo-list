import React from "react";

const Todo = ({ todos }) => {
  return (
    <div className="listOfTodos">
      <span>{todos.name}</span>
      <input className="checkbox" type="checkbox" checked={todos.complete} />
    </div>
  );
};
export default Todo;
