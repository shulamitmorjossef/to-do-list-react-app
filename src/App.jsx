import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import TodoList from "./components/TodoList.jsx";
import EditModal from "./components/EditModal.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About.jsx";
import "./App.css"; // הקובץ החיצוני לעיצוב

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (text) => setTodos([...todos, { id: Date.now(), text, done: false }]);
  const toggleTodo = (id) => setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));
  const saveTodo = (newText) => {
    setTodos(todos.map(t => t.id === editingTodo.id ? { ...t, text: newText } : t));
    setEditingTodo(null);
  };
  const closeModal = () => setEditingTodo(null);

  return (
    <Router>
      <div className="top-bar">
        <Link to="/about" className="about-button">About</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <Header />
              <div className="content">
                <Sidebar addTodo={addTodo} />
                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
