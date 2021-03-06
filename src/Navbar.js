import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  

        <nav className="navbar">
            <h1>Anurag Blogs</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to="/create" style = {{
                    color : "white",
                    backgroundColor: "#de2716",
                    borderRadius : "6px"
                }}>New Blog</Link>
            </div>
        </nav>

    );
}
 
export default Navbar ;