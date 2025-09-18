import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import EditModal from "./components/EditModal";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // const editTodo = (todo) => {
  //   setEditingTodo(todo);
  // };

  const saveTodo = (newText) => {
    setTodos(
      todos.map((t) =>
        t.id === editingTodo.id ? { ...t, text: newText } : t
      )
    );
    setEditingTodo(null);
  };

  const closeModal = () => setEditingTodo(null);

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Sidebar addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          // editTodo={editTodo}
        />
      </div>
      <Footer />

      {/* <EditModal
        isOpen={!!editingTodo}
        currentText={editingTodo?.text || ""}
        onClose={closeModal}
        onSave={saveTodo}
      /> */}
    </div>
  );
}

export default App;
