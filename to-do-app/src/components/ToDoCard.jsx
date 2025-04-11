import { button } from "@material-tailwind/react";
import { FaPencilAlt } from "react-icons/fa";

const ToDoCard = ({ todo, setTodos, setIsOpen, setIsEditing, setTitle, setDesc }) => {
    const { id, title, desc, isCompleted } = todo;
    function toggleIsCompleted() {
        todo.isCompleted = !todo.isCompleted;
        setTodos((prev) => {
            const updatedTodos = prev.map((item) => {
                if (item.id === id) {
                    item.isCompleted = !item.isCompleted;
                }
                return item;
            });
            localStorage.setItem("todoList", JSON.stringify(updatedTodos));
            return updatedTodos;
        })
    }

    function editCard(id, title, desc) {
        setIsOpen(true);
        setTitle(title)
        setDesc(desc)
        setIsEditing(id);
    }

    function deleteCard() {
        setTodos((prev) => {
            const newTodos = prev.filter((item) => {
                if (item.id != id) {
                    return item;
                }
            })
            localStorage.setItem("todoList", JSON.stringify(newTodos));
            return newTodos;
        })
    }

    return (
        <div className="h-[300px] w-[300px] p-5 rounded-lg bg-[white] shadow-lg flex flex-col gap-5">
            <div className="flex justify-between items-end">
                <span className="font-semibold flex flex-wrap">{title}</span>
                <div className="flex gap-2">
                    <button onClick={toggleIsCompleted}>
                        {
                            isCompleted ? <div className="text-xl">✅</div> : <div className="h-5 w-5 rounded-sm border border-black bg-[#9ACBD0]"></div>
                        }
                    </button>
                    <button onClick={() => editCard(id, title, desc)}>
                        <FaPencilAlt />
                    </button>
                    <button className="" onClick={deleteCard}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="24px" fill="#FF0000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z" /></svg>
                    </button>
                </div>
            </div>
            <div>
                <p className="text-sm">
                    {desc}
                </p>
            </div>
        </div>
    )
}
export default ToDoCard;