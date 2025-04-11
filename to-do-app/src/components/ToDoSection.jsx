import ToDoCard from "./ToDoCard";

const ToDoSection = ({ openModal, todos, setTodos, setIsOpen, setIsEditing, setDesc, setTitle }) => {
    return (
        <div className="p-8 flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl font-semibold">Todo</h2>
            <button className="rounded-full p-4 bg-[#006A71] text-white hover:bg-[#67AE6E] hover:scale-[1.05] " onClick={openModal}>Create Todo</button>

            {
                true && todos.length < 1 ?
                    <p>Start by Adding a Task...</p>
                    :
                    <>
                        <p className="text-2xl italic">Incompleted Tasks</p>
                        <div className="flex flex-wrap gap-5 justify-center">
                            {
                                todos.map((todo) => {
                                    if (!todo.isCompleted) return <ToDoCard setTitle={setTitle} setDesc={setDesc} key={todo.id} todo={todo} setTodos={setTodos} setIsOpen={setIsOpen} setIsEditing={setIsEditing} />//Incompleted Tasks
                                })}
                        </div>
                        <p className="text-2xl italic">Completed Tasks</p>
                        <div className="flex flex-wrap gap-5 justify-center">
                            {
                                todos.map((todo) => {
                                    if (todo.isCompleted) return <ToDoCard setTitle={setTitle} setDesc={setDesc} key={todo.id} todo={todo} setTodos={setTodos} setIsOpen={setIsOpen} setIsEditing={setIsEditing} />//Completed Tasks
                                })
                            }
                        </div>
                    </>
            }

        </div>
    )
}
export default ToDoSection;