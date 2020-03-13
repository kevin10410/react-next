import Link from 'next/link';

const PostLink = props => {

  return (
    <li>
      <Link
        href="/post/[id]"
        as={`/post/${props.id}`}
      >
        <a>{props.id}</a>
      </Link>
  </li>
  )
};

export default PostLink;
