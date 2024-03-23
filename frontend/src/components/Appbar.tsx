import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar= ()=>{
    return(
        
        <div className="border-b-[1px] border-slate-300 flex justify-between px-8 py-4">
            <Link to={'/blogs'}>
            <div className="flex text-2xl font-medium cursor-pointer">
                Medium
            </div>
            </Link>
            <div >
                <Link to={"/publish"}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-4 cursor-pointer">Publish</button>
                </Link>
            
                <Avatar 
                name="Aditya"
                size={"big"}
                />
            </div>
            
        </div>
    )
}