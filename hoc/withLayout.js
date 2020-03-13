import styled from 'styled-components';

import Header from '../components/Header';

const DivLayout = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`;

const withLayout = Page => {

  return () => (
    <DivLayout>
      <Header/>
      <Page/>
    </DivLayout>
  )
};

export default withLayout;
