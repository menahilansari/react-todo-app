import "./App.css";
import { useState } from "react";
import TodoListItem from "./TodoListItem";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36); // Convert timestamp to base36
    const random = Math.random().toString(36).substring(2, 8); // Random string
    return `${timestamp}-${random}`;
  };

  const _handleChangeInputValue = (input) => {
    setTodoName(input.target.value);
  };

  const _handleAddTodo = (event) => {
    event.preventDefault();

    const id = generateUniqueId();

    const newTodo = { name: todoName, id };

    const updatedTodoList = [...todoList, newTodo];

    setTodoList(updatedTodoList);
    setTodoName("");
  };

  const _handleUpdateTodo = (todoId, newValue) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === todoId) {
        return { ...item, name: newValue };
      }

      return item;
    });

    setTodoList(updatedTodoList);
  };

  const _handleDeleteTodo = (todoId) => {
    const updatedTodoList = todoList.filter((item) => {
      if (item.id !== todoId) {
        return item;
      }
    });

    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      <form onSubmit={_handleAddTodo}>
        <input
          type="text"
          name="name"
          value={todoName}
          onChange={_handleChangeInputValue}
        />
        <button>Add todo</button>
      </form>

      <div className="todo-list">
        <ul>
          {todoList.map((item) => {
            return (
              <TodoListItem
                key={item.id}
                todo={item}
                onDelete={_handleDeleteTodo}
                onUpdate={_handleUpdateTodo}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
