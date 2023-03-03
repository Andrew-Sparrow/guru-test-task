import styled from 'styled-components';

const StyledCard = styled.div`
  width: 300px;
  height: 368px;
  background-color: #53531e;

  @media(min-width: 321px) {
    width: 224px;
  }
`;


function Card(): JSX.Element {
  return (
    <StyledCard>

    </StyledCard>
  );
}

export { Card };
