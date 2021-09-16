import "./Todo.css";
import TodoList from "../asset2/TodoList";
import TodoCreate from "../asset3/Todocreate";
import { useState } from "react";

const Todo = () => {
  const [getTodos, setTodos] = useState([]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};
export default Todo;
