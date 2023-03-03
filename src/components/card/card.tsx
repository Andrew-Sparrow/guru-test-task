import styled from 'styled-components';

const StyledCard = styled.div`
  width: 300px;
  height: 368px;
  background-color: #53531e;
  border-radius: 10px;
  border: 1px solid #000;


  @media(min-width: 321px) {
    width: 224px;
    margin-left: 24px;
  }
`;


function Card(): JSX.Element {
  return (
    <StyledCard>

    </StyledCard>
  );
}

export { Card };
