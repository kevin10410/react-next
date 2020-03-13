import Layout from '../components/UI/Layout';
import PostLink from '../components/PostLink';

const Index = () => {

  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  );
};

export default Index;
