import { useRouter } from 'next/router';
import withLayout from '../../hoc/withLayout';

const Post = props => {
  const router = useRouter();

  return (
    <>
      <h1>{ router.query.id }</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

export default withLayout(Post);
