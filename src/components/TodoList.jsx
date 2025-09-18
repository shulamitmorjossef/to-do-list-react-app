import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <main className="todo-list">
      <h2>Tasks</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            // editTodo={editTodo}
          />
        ))}
      </ul>
    </main>
  );
}

export default TodoList;
