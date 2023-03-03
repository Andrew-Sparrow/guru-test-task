import styled from 'styled-components';

import { Card } from '../card/card';

const StyledMain = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  background-color: #000099;
  
  @media(min-width: 321px) {
    width: 968px;
  }
`;

const list = new Array(16).fill(1);
const newList = list.map((item, index) => index + 1);
console.log(newList);

function Main(): JSX.Element {
  return (
    <StyledMain>
      {
        newList.map((card) => <Card key={card} />)
      }
    </StyledMain>
  );
}

export { Main };
