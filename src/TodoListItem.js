import React, { useState } from "react";

const TodoListItem = ({ todo, onDelete, onUpdate }) => {
  const [editable, setEditable] = useState(false);

  const [todoInputValue, setTodoInputValue] = useState(todo.name);

  const _handleTodoEditable = () => {
    setTodoInputValue(todo.name);
    setEditable(true);
  };

  const _handleChangeValue = (input) => {
    setTodoInputValue(input.target.value);
  };

  const _handleUpdateTodo = () => {
    onUpdate(todo.id, todoInputValue);
    setEditable(false);
  };

  const _handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li>
      {editable ? (
        <span>
          <input
            value={todoInputValue}
            className="editable-input-text"
            onChange={_handleChangeValue}
          />
        </span>
      ) : (
        <span>{todo?.name}</span>
      )}

      {editable ? (
        <button ca onClick={_handleUpdateTodo}>
          Update
        </button>
      ) : (
        <button onClick={_handleTodoEditable}>Edit</button>
      )}

      <button onClick={_handleDelete}>Delete</button>
    </li>
  );
};

export default TodoListItem;
