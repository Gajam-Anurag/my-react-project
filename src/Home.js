import {useState, useEffect} from 'react';
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState(null)


    const [name, setName] = useState("Anurag Gajam")

    useEffect( () => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data)
        })
    }, []);

    return ( 
   
        <div className="home">
           { blogs && <BlogList blogs = {blogs} title = "My blogs" />}
           {/* <BlogList blogs = {blogs.filter((blog) => blog.author == 'Gajam')}  title = "Gajam's Blogs" handleDelete = {handleDelete}/>
            <button onClick={() => setName("Anusha")}>Change Name</button>
            <p>{name}</p>*/}
        </div>
     );
}
 
export default Home;