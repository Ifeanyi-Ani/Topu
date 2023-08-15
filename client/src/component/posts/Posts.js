import { useSelector } from 'react-redux';
import Post from './Post';
const Posts = () => {
  const posts = useSelector(state => state.posts.posts);
  const status = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);

  console.log(status);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Post />
      <Post />
    </>
  );
};
export default Posts;
