import { useParams } from "react-router-dom";
import useFetch from "./useFetch"; 
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {

    const {id} = useParams()
    const {data: blog, isPending, isError} = useFetch('http://localhost:8000/blogs/' + id)

    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method : 'DELETE'
        }).then (() =>{
            navigate('/')
        })
    }

    return ( 
        <div className="blog-details">
         {isPending && <div>Loading...</div>}
         {isError && <div>{isError}</div>}
         {blog && 
         (<article>
         <h2>Title: {blog.title}</h2><br/>
         <h3>Written by {blog.author}</h3><br/>
         <div>{blog.body}</div>
         <button onClick={handleClick}>Delete</button>
         </article>
         )}
        </div>       
     );
}
 
export default BlogDetails;