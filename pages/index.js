import {
  fetchShowsByName,
} from '../api/searchService';

import Layout from '../components/UI/Layout';
import PostLink from '../components/PostLink';

const Index = props => {

  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {
          props.shows &&
            props.shows.map(show => (
              <PostLink
                key = { show.id }
                id = { show.id }
                name = { show.name }
              />
          ))
        }
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async function () {
  // Call an external API endpoint to get posts.
  const data = await fetchShowsByName('batman')
    .then(res => res.data);

  return {
    shows: data.map(entry => entry.show),
  };
};

export default Index;
