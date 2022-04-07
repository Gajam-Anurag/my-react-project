import {useState} from 'react'


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new Website', body: 'abcdefghij', author : 'Anurag', id:1},
        {title: "Welcome party", body: "abcdefghij", author : "Gajam", id:2},
        {title: "Another website", body: "abcdefghij", author : "Anurag Gajam", id:3}
    ]);

    return ( 
   
        <div className="home">
            <h2>My Home blog</h2><br/>
            {blogs.map((blog) => (
                <div className="blog-pre" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;