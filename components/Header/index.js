import Link from 'next/link';
import styled from 'styled-components';

const ALink = styled.a`
  margin-right: 15px;
`;

const Header = () => (
  <div>
    <Link href="/">
      <ALink>Home</ALink>
    </Link>
    <Link href="/about">
      <ALink>About</ALink>
    </Link>
  </div>
);

export default Header;
