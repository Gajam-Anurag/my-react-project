import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, isError} = useFetch('http://localhost:8000/blogs')
    
    return ( 
   
        <div className="home">
           {isError && <div>{isError}</div>}
           {isPending && <div>Loading ....</div>}
           { blogs && <BlogList blogs = {blogs} title = "My blogs" />}
           {/* <BlogList blogs = {blogs.filter((blog) => blog.author == 'Gajam')}  title = "Gajam's Blogs" handleDelete = {handleDelete}/>
            <button onClick={() => setName("Anusha")}>Change Name</button>
            <p>{name}</p>*/}
        </div>
     );
}
 
export default Home;