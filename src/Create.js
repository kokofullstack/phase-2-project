import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Maung');
  const [isPending, setIsPending] = useState(false);
  {
    /*Four state variables are declared using the useState hook*/
  }
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };
    {
      /*creates a blog object using the current values of title, body, and author, and sets isPending to true*/
    }

    setIsPending(true);
    {
      /*makes a POST request to a local server*/
    }
    fetch('https://my-json-server.typicode.com/kokofullstack/phase-2-data/blogs/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      history.push('/');
      {
        /*go back to home page*/
      }
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        {/* Updates the title state variable */}
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Maung">Maung</option>
          <option value="Ko Ko">Ko Ko</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {/* Displays the "Add Blog" button if isPending is false*/}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
