import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  {
    /*The returned valuesare destructured*/
  }
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('https://json-server-template-mn1e.onrender.com/blogs/' + id);

  const history = useHistory();

  const handleClick = () => {
    fetch('https://json-server-template-mn1e.onrender.com/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {/*Renders the details of the blog*/}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
