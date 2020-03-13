import {
  fetchShowDetailById
} from '../../api/searchService';

import Layout from '../../components/UI/Layout';

const Post = props => {

  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const data = await fetchShowDetailById(id)
    .then(res => res.data);

  return {
    show: data,
  };
};

export default Post;
