import styled from 'styled-components';

import { Card } from '../card/card';

const StyledMain = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;


  @media(min-width: 321px) {
    width: 968px;
  }
`;

const list = new Array(16).map((item, index) => index);


function Main(): JSX.Element {
  return (
    <StyledMain>
      {
        list.map((card) => <Card key={card} />)
      }
    </StyledMain>
  );
}

export { Main };
