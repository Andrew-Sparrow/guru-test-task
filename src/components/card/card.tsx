import styled from 'styled-components';
import SVG from 'react-inlinesvg';


type Props = {
  seen: boolean;
};

const StyledCard = styled.li<Props>`
  --green: #00A0AB;

  width: 300px;
  height: 368px;
  margin-bottom: 24px;

  .card__img {
    width: 300px;
    height: 340px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .info {
    padding-top: 2px;
    padding-left: 12px;
    padding-right: 12px;
    background-color: ${({ seen }) => seen ? '#FFF6A5' : '#fff'};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 12px;
  }

  .info__box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .info__box--top {
    margin-bottom: 8px;
  }

  .info__price {
    font-weight: 700;
    font-size: 22px;
  }

  .info__old-price {
    font-weight: 500;
    font-size: 14px;
  }

  .info__title {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 14px;
    font-weight: 500;
  }

  .info__city,
  .info__data {
    font-weight: 400;
    font-size: 12px;
  }

  .info__deliver:not(.info__deliver--seen),
  .info__deal:not(.info__deal--seen) {
    cursor: pointer;
  }

  .info__deliver:not(.info__deliver--seen):hover,
  .info__deal:not(.info__deal--seen):hover {
    & path {
      fill: var(--green);
    }
  }

  .info__deliver--seen,
  .info__deal--seen {
    & path {
      fill: var(--green);
    }
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

const StyledSVG = styled(SVG)`
  width: 24px;
  height: 24px;
`;

type CardProps = {
  oldPrice: string;
  price: string;
  title: string;
  locality: string;
  date: number;
  seen: boolean;
};


function Card(props: CardProps): JSX.Element {
  const {
    oldPrice,
    price,
    title,
    locality,
    date,
    seen
  } = props;

  const imgPath = 'https://source.unsplash.com/random';

  return (
    <StyledCard seen={seen}>
      <img className="card__img" src={imgPath} alt="random" />
      <div className='info'>
        <div className="info__box info__box--top">
          <div className="info__price">
            <p className="info__old-price">{oldPrice}</p>
            <p className="info__price">{price}</p>
          </div>
          <div className="info__icons">
            <StyledSVG src={'img/znachok_dostavki.svg'} className={`info__deliver ${seen ? 'info__deliver--seen' : ''}`} />
            <StyledSVG src={'img/znachok_sdelki.svg'} className={`info__deal ${seen ? 'info__deal--seen' : ''}`} />
          </div>
        </div>
        <p className="info__title">{title}</p>
        <div className="info__box">
          <p className="info__city">{locality}</p>
          <p className="info__data">{date}</p>
        </div>
      </div>
    </StyledCard>
  );
}

export { Card };
