import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodo = todos.filter((todo) => todo.done).length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodo={completedTodo}
      />
    </div>
  );
}
