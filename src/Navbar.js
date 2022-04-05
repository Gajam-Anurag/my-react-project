const Navbar = () => {
    return (  

        <nav className="navbar">
            <h1>Anurag Blog Nav Page</h1>
            <div className="links">
                <a href='/'>My Nav Page</a>
                <a href="/create" style = {{
                    color : "white",
                    backgroundColor: "#de2716",
                    borderRadius : "6px"
                }}>New Blog</a>
            </div>
        </nav>

    );
}
 
export default Navbar ;