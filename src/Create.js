import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Anurag');
    const [isPending, setPending] = useState(false);
    const navigate = useNavigate();

    const handleEvent = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setPending(true)

        fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body : JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added')
            console.log(JSON.stringify(blog))
            setPending(false)
            navigate('/')
        })
    }

    return (
       <div className="create">
           <h2>Create a new blog</h2>
           <form onSubmit={handleEvent}>
               <label>Blog Title:</label>
               <input 
               type='text' 
               required
               value = {title}
               onChange = {(e) => setTitle(e.target.value)} ></input>
               <label>Blog body:</label>
               <textarea 
               required
               value = {body}
               onChange = {(e) => setBody(e.target.value)}></textarea>
               <label>Blog Author</label>
               <select
               value = {author}
               onChange = {(e) => setAuthor(e.target.value)}>
                   <option value='mario'>Mario</option>
                   <option value='Anurag'>Anurag</option>
               </select>
               {!isPending && <button>Add blog</button>}
               {isPending && <button disabled>Adding blog ...</button>}
           </form>
       </div>
    );
}

export default Create;