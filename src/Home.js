import {useState, useEffect} from 'react';
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState( [
        { title: 'My new website', body: 'Chaala unnay lopala daachinam anthe', author: 'Anurag', id: 1 },
        { title: 'Welcome party!', body: 'Pynadhi chooshaka nka loothuga choopistha', author: 'Gajam', id: 2 },
        { title: 'Web dev top tips', body: 'Avvanni chooshaka neek oopika undadhu le', author: 'Anurag Gajam', id: 3 }]
    );
    const handleDelete = (id) => {

        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);

    }

    const [name, setName] = useState("Anurag Gajam")

    useEffect( () => {
        console.log("useEffect renders when we change data based on useState");
        console.log(name);
    }, [name]);

    return ( 
   
        <div className="home">
            <BlogList blogs = {blogs} title = "My blogs" handleDelete = {handleDelete}/>
            <BlogList blogs = {blogs.filter((blog) => blog.author == 'Gajam')}  title = "Gajam's Blogs" handleDelete = {handleDelete}/>
           {/* <button onClick={() => setName("Anusha")}>Change Name</button>
            <p>{name}</p>*/}
        </div>
     );
}
 
export default Home;