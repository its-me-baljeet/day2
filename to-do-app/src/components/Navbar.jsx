import { IoMenu } from "react-icons/io5";
const NavBar = () => {

    return (
        <div className="h-16 flex justify-start p-5 items-center gap-3 bg-[#9ACBD0]">
            <div><IoMenu /></div>
            <div className="h-8 w-8 rounded-full bg-[#006A71]"></div>
            To Do List
        </div>
    )
}
export default NavBar;