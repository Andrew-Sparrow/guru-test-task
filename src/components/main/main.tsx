import styled from 'styled-components';

import { Card } from '../card/card';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media(min-width: 321px) {
    margin-left: -24px;
  }
`;


const StyledMain = styled.div`
  width: 300px;
  background-color: #000099;

  @media(min-width: 321px) {
    width: 968px;
  }
`;

const list = new Array(16).fill(1).map((item, index) => index + 1);

function Main(): JSX.Element {
  return (
    <StyledMain>
      <StyledWrapper>
        {
          list.map((card) => <Card key={card} />)
        }
      </StyledWrapper>
    </StyledMain>
  );
}

export { Main };
