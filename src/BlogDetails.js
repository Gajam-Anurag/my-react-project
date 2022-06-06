import { useParams } from "react-router-dom";
import useFetch from "./useFetch"; 

const BlogDetails = () => {

    const {id} = useParams()
    const {data: blog, isPending, isError} = useFetch('http://localhost:8000/blogs/' + id)

    return ( 
        <div className="blog-detail">
         {isPending && <div>Loading...</div>}
         {isError && <div>{isError}</div>}
         {blog && 
         (<article>
         <h2>Title: {blog.title}</h2><br/>
         <h3>Written by {blog.author}</h3><br/>
         <div>{blog.body}</div>
         </article>
         )}
        </div>       
     );
}
 
export default BlogDetails;