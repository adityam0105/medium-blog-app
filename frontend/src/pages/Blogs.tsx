import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
  return (
    <div >
        <Appbar />
        <div className="flex justify-center">
        <div className="max-w-xl">
            <BlogCard 
        authorName= {"Aditya Mukherji"}
        title ={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        content= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt eveniet aliquid excepturi est culpa, nostrum doloremque, aperiam natus sapiente ratione exercitationem quo iste recusandae enim veniam fuga mollitia odio!"}
        publishedDate= {"22nd march 2024"}
        />
         <BlogCard 
        authorName= {"Aditya Mukherji"}
        title ={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        content= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt eveniet aliquid excepturi est culpa, nostrum doloremque, aperiam natus sapiente ratione exercitationem quo iste recusandae enim veniam fuga mollitia odio!"}
        publishedDate= {"22nd march 2024"}
        />
         <BlogCard 
        authorName= {"Aditya Mukherji"}
        title ={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        content= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt eveniet aliquid excepturi est culpa, nostrum doloremque, aperiam natus sapiente ratione exercitationem quo iste recusandae enim veniam fuga mollitia odio!"}
        publishedDate= {"22nd march 2024"}
        />
        </div>
        </div>
    </div>
  )
}