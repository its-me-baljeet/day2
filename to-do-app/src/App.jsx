import Carousel from "./components/Carousel"
import NavBar from "./components/Navbar"
import ToDoSection from "./components/ToDoSection"
import AddTaskModal from "./components/AddTaskModal";
import { useState } from "react";
import Modal from "./components/Modal";

const todosInitial = [
  { id: 1, title: "Title 1", desc: "sjdfoijoad", isCompleted: false },
  { id: 2, title: "Title 2", desc: "lorem ipsum dolor", isCompleted: true },
  { id: 3, title: "Title 3", desc: "task description three", isCompleted: false },
  { id: 4, title: "Title 4", desc: "example task four", isCompleted: true },
  { id: 5, title: "Title 5", desc: "quick brown fox", isCompleted: false },
  { id: 6, title: "Title 6", desc: "jumped over dog", isCompleted: true },
  { id: 7, title: "Title 7", desc: "another test task", isCompleted: false },
  { id: 8, title: "Title 8", desc: "some random text", isCompleted: true },
  { id: 9, title: "Title 9", desc: "yet another task", isCompleted: false },
  { id: 10, title: "Title 10", desc: "final description", isCompleted: true }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState(todosInitial);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="bg-[#F2EFE7]">
      <NavBar />
      <Carousel />
      <ToDoSection openModal={openModal} todos={todos} setTodos={setTodos} setIsOpen={setIsOpen} />
      {isOpen && <Modal onClose={closeModal} title={"Add task details..."}><AddTaskModal closeModal={closeModal} setTodos={setTodos} /></Modal>}
    </div>
  )
}

export default App
