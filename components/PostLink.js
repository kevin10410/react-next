import Link from 'next/link';

const PostLink = props => {

  return (
    <li>
      <Link
        href={`/post/[${props.id}]`}
        as={`/post/${props.id}`}
      >
        <a>{props.name}</a>
      </Link>
  </li>
  )
};

export default PostLink;
