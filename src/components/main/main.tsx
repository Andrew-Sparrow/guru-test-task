import styled from 'styled-components';

import { useAppSelector } from '../../hooks/hooks';
import { Card } from '../card/card';
import { ProductDataType } from '../../types/types';

const StyledWrapper = styled.ul`
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

function Main(): JSX.Element {

  const products = useAppSelector((state) => state.products.list);

  return (
    <StyledMain>
      <StyledWrapper>
        {
          products.map((card: ProductDataType) => <Card key={card.id} {...card} />)
        }
      </StyledWrapper>
    </StyledMain>
  );
}

export { Main };
