import { useState } from "react";
import Form from "./Form";

const AddTaskModal = ({ closeModal, setTodos, isEditing, setTitle, setDesc, desc, title }) => {

    const [titleError, setTitleError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setTitleError("Title can't be Empty!");
            return;
        }
        setTitleError("");

        if (isEditing !== -1) {
            setTodos((prev) => {
                const updatedTodos = prev.map((item) => {
                    if (item.id === isEditing) {
                        console.log(title);
                        console.log(desc);
                        item.title = title;
                        item.desc = desc;
                        return item;
                    }
                    return item;
                });
                localStorage.setItem("todoList", JSON.stringify(updatedTodos));
                return updatedTodos;
            })
        } else {
            const newTodo = {
                title: title,
                desc: desc,
                isCompleted: false,
                id: Date.now()
            }

            let newTodos;
            setTodos((prev) => {
                newTodos = [newTodo, ...prev];
                localStorage.setItem("todoList", JSON.stringify(newTodos));
                return newTodos;
            });
            closeModal();
        }

    }

    return (
        <Form handleSubmit={handleSubmit} setTitle={setTitle} setDesc={setDesc} title={title} desc={desc} titleError={titleError} />
    )
}
export default AddTaskModal;