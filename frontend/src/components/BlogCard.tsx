import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:string;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b-[1.5px] p-4 border-slate-300 pb-4 pt-4 pl-2 w-screen max-w-screen-md cursor-pointer">
      <div className="flex w-full">
        <Avatar name={authorName} />
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          {authorName}
        </div>
        <div className="pl-2 flex justify-center flex-col">
          <Circle />
        </div>

        <div className="pl-2 pt-0.5 font-thin text-slate-500 text-sm">
          {publishedDate}
        </div>
      </div>
      <div className="pt-3">
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
      </div>
      
      <div className="text-slate-600 text-sm font-thin pt-3 ">
        {`${Math.ceil(content.length / 100)} minutes`}
      </div>
    </div>
    </Link>
  );
};
export function Circle() {
  return <div className="w-1 h-1 bg-slate-500 rounded-full"></div>;
}
export function Avatar({name, size="small"}: { name: string , size?:"small"|"big" }) {

   return <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-600
   ${size=="small"?"w-6 h-6":"w-10 h-10"}
   `}>
      <span className={`${size=="small"?"text-xs":"text-md"} font-extralight text-gray-200 `}>
        {name[0]}
      </span>
    </div>
}
