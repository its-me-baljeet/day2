import { useState } from "react";

const AddTaskModal = ({ closeModal, setTodos }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function handleSubmit() {
        const newTodo = {
            title,
            desc,
            isCompleted: false,
            id: Date.now()
        }

        setTodos((prev) => {
            return [newTodo, ...prev];
        });

        closeModal();
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="text" name="task" id="task-title" placeholder="Enter the task title.." className="w-full p-2 rounded-md bg-gray-50" onInput={(e) => (setTitle(e.target.value))} />
            <textarea name="task-description" id="task-desc" placeholder="Add a description..." className="w-full h-full max-h-full p-3 rounded-md bg-gray-50" onInput={(e) => (setDesc(e.target.value))}></textarea>
            <button type="submit" className="rounded-md bg-[#FF9149] p-2 text-xl text-white" onClick={handleSubmit}>Add Task</button>
        </form>
    )
}
export default AddTaskModal;