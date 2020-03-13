import styled from 'styled-components';

import Header from '../components/Header';

const DivLayout = styled.div`
  margin: 20;
padding: 20;
  border: 1px solid #DDD;
`;

const Layout = props => {

  return (
    <DivLayout>
      <Header/>
      { props.children }
    </DivLayout>
  )
};

export default Layout;
