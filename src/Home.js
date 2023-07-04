import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  {
    /* The returned values are destructured from the hook's return value. */
  }
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('https://json-server-template-61g8.onrender.com/blogs/');
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
