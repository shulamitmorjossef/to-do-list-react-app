import { FaTrash, FaEdit } from "react-icons/fa"; 

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.done ? "done" : ""}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <span style={{ display: "flex", gap: "0.5rem" }}>
        {/* <FaEdit onClick={() => editTodo(todo.id)} style={{ cursor: "pointer" }} /> */}
        <FaTrash onClick={() => deleteTodo(todo.id)} style={{ cursor: "pointer" }} />
      </span>
    </li>
  );
}
export default TodoItem;