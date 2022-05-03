const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return (  
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-pre" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>{blog.body}</h3>
                    <p>written by {blog.author}</p>  
                    <button onClick = {() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;