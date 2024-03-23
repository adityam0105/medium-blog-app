import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBLog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/Blogskeleton";

export const Blog = () => {
  const {id} =useParams();
  const {loading,blog} = useBlog({
    id :id ||''
  })
  if(loading){
    return(<div>
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </div>) 
  }
  return(<div>
    <FullBLog blog={blog}/>
  </div>)
}

