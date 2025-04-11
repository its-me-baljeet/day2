// App.jsx
import './index.css';

import { useState } from 'react';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ToDoSection from './components/ToDoSection';
import Modal from './components/Modal';
import AddTaskModal from './components/AddTaskModal';

const todosInitial = JSON.parse(localStorage.getItem('todoList')) || [];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState(todosInitial);
  const [isEditing, setIsEditing] = useState(-1);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setIsEditing(-1);
    setTitle('');
    setDesc('');
  };

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300 ease-in-out">
      <NavBar />
      <Carousel />
      <ToDoSection
        todos={todos}
        setTodos={setTodos}
        openModal={openModal}
        setIsEditing={setIsEditing}
        setIsOpen={setIsOpen}
        setTitle={setTitle}
        setDesc={setDesc}
      />

      {isOpen && (
        <Modal
          onClose={closeModal}
          title={isEditing !== -1 ? 'Edit Task' : 'Add Task'}
        >
          <AddTaskModal
            closeModal={closeModal}
            setTodos={setTodos}
            isEditing={isEditing}
            setTitle={setTitle}
            setDesc={setDesc}
            title={title}
            desc={desc}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
