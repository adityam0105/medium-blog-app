import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBLog = ({blog}:{blog:Blog})=>{
    return(
    <div>
        <Appbar />
        <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl">
        <div className="col-span-8 pt-4">
            <div className="text-5xl font-extrabold pt-15">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
                Post on 2nd December 2023
            </div>
            <div className="pt-4">
                {blog.content}
            </div>
        </div>
        <div className="col-span-4 ">
            <div className="text-slate-600 text-lg pt-6 pl-1">
                Author
            </div>
            <div className="flex w-full pt-3 ">
                <div className="pr-3 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.name||"Anonymous"} />

                </div>
            <div className="text-xl font-bold flex flex-col justify-center ">
            {blog.author.name || "Anonymous"}
            </div>
            
            </div>
            <div className="pl-1 pt-2 text-sm text-slate-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum.
            </div>
        </div>
        </div>
        
    </div>
    </div>
    
    )

}