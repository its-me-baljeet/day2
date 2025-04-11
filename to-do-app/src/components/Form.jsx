const Form = ({ handleSubmit, setTitle, setDesc, title, desc, titleError }) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="text" name="task" id="task-title" placeholder="Enter the task title.." className="w-full p-2 rounded-md bg-gray-50" onChange={(e) => setTitle(e.target.value)} value={title} />
            {
                titleError && <p className="text-[red]">{titleError}</p>
            }
            <textarea name="task-description" id="task-desc" placeholder="Add a description..." className="w-full h-full max-h-full p-3 rounded-md bg-gray-50" onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
            <button type="submit" className="rounded-md bg-[#FF9149] p-2 text-xl text-white" onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default Form;