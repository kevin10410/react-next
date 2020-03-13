import withLayout from '../hoc/withLayout';
import PostLink from '../components/PostLink';

const Index = () => {

  return (
    <>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </>
  );
};

export default withLayout(Index);
