import styled from 'styled-components';

const StyledCard = styled.li`
  width: 300px;
  height: 368px;
  background-color: #53531e;
  border-radius: 10px;
  margin-bottom: 24px;

  .card__img {
    width: 300px;
    height: 340px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  @media(min-width: 321px) {
    width: 224px;
    margin-left: 24px;

    .card__img {
      width: 224px;
      height: 260px;
    }
  }
`;


function Card(): JSX.Element {
  const imgPath = 'https://source.unsplash.com/random';

  return (
    <StyledCard>
      <img className="card__img" src={imgPath} alt="random" />
    </StyledCard>
  );
}

export { Card };
