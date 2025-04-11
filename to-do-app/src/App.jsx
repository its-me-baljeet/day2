import Carousel from "./components/Carousel"
import NavBar from "./components/Navbar"
import ToDoSection from "./components/ToDoSection"
import AddTaskModal from "./components/AddTaskModal";
import { useState } from "react";
import Modal from "./components/Modal";
import SideBar from "./SideBar";

const todosInitial = JSON.parse(localStorage.getItem("todoList")) || [];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState(todosInitial);
  const [isEditing, setIsEditing] = useState(-1);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [editIndex, setEditIndex] = useState(-1)
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setIsEditing(-1);
    setTitle("");
    setDesc("");
  }
  return (
    <div className="bg-[#F2EFE7]">
      <NavBar />
      <Carousel />
      <ToDoSection setTitle={setTitle} setDesc={setDesc} openModal={openModal} todos={todos} setTodos={setTodos} setIsOpen={setIsOpen} setIsEditing={setIsEditing} />

      {isOpen && <Modal onClose={closeModal} title={isEditing !== -1 ? "Edit task details..." : "Add task details..."}><AddTaskModal closeModal={closeModal} setTodos={setTodos} isEditing={isEditing} setTitle={setTitle} setDesc={setDesc} title={title} desc={desc} /></Modal>}
    </div>
  )
}

export default App
