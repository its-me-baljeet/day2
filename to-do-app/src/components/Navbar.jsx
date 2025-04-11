// components/NavBar.jsx
import { IoMenu } from 'react-icons/io5';

const NavBar = () => (
    <nav className="h-16 flex items-center px-6 bg-secondary transition-colors duration-300 ease-in-out">
        <IoMenu className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
        <h1 className="ml-4 flex-1 text-xl font-semibold">To Do List</h1>
    </nav>
);

export default NavBar;
