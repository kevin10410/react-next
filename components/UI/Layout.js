import styled from 'styled-components';

import Header from '../Header';

const DivLayout = styled.div`
  margin: 20px;
  padding: 20px;
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
