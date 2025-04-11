// components/Form.jsx
const Form = ({ handleSubmit, setTitle, setDesc, title, desc, titleError }) => (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 animate-fade">
        <input
            type="text"
            placeholder="Task title…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded-md bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
        />
        {titleError && <p className="text-red-500 text-sm">{titleError}</p>}
        <textarea
            placeholder="Description…"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-2 rounded-md bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
        />
        <button
            type="submit"
            className="self-end px-6 py-2 rounded-md bg-primary text-white font-medium
                   hover:bg-primary/90 active:scale-95 transition-all duration-150"
        >
            Save
        </button>
    </form>
);
export default Form;
