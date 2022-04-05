const Home = () => {

    const Home = (e) => {
        console.log("Hello",e);

    }
    const Home2 = (name,e) => {

        console.log("Hello " + name, e.target);

    }
    return ( 
   
        <div className="home">
            <h2>My Home blog</h2>
            <button onClick = {Home} > Click Me</button>
            <button onClick = { (e) => Home2('Anurag Gajam',e) }>Click for Name</button>
        </div>
     );
}
 
export default Home;