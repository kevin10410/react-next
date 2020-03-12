import Link from 'next/link';

const Index = () => {

  return (
    <div>
      <Link href="/about">
        <a title="About Page">About Page</a>
      </Link>
      <div>
        <p>Hello Next.js</p>
      </div>
    </div>
  );
};

export default Index;
