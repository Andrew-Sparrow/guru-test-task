import styled from 'styled-components';

const StyledCard = styled.li`
  width: 300px;
  height: 368px;
  background-color: #fff;
  border-radius: 10px;
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
  }

  .info__city,
  .info__data {
    font-weight: 400;
    font-size: 12px;
  }

  .info__deliver--hoverable:hover,
  .info__deal--hoverable:hover {
    cursor: pointer;
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
    <StyledCard>
      <img className="card__img" src={imgPath} alt="random" />
      <div className='info'>
        <div className="info__box info__box--top">
          <div className="info__price">
            <p className="info__old-price">{oldPrice}</p>
            <p className="info__price">{price}</p>
          </div>
          <div className="info__icons">
            <svg className={`info__deliver ${!seen ? 'info__deliver--hoverable' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.42149 19.4356C7.50378 19.4356 8.38115 18.5583 8.38115 17.476C8.38115 16.3937 7.50378 15.5163 6.42149 15.5163C5.33919 15.5163 4.46182 16.3937 4.46182 17.476C4.46182 18.5583 5.33919 19.4356 6.42149 19.4356Z" fill="#C7C7C7" />
              <path d="M19.6681 7.15701C19.3836 6.62474 18.8285 6.29297 18.225 6.29432H15.9336V9.35927C15.9336 9.70064 16.2333 9.97678 16.5748 9.97678H21.1774L19.6681 7.15701Z" fill="#C7C7C7" />
              <path d="M17.5007 15.5163C16.4183 15.5163 15.5409 16.3937 15.5409 17.4761C15.5409 18.5585 16.4183 19.4359 17.5007 19.4359C18.5831 19.4359 19.4605 18.5585 19.4605 17.4761C19.4605 17.4761 19.4605 17.476 19.4605 17.476C19.4592 16.3942 18.5825 15.5175 17.5007 15.5163Z" fill="#C7C7C7" />
              <path d="M22.6466 12.064L21.6335 10.7729H16.5748C15.7943 10.7729 15.1374 10.1396 15.1374 9.35918V5.58964C15.1447 5.27131 14.8925 5.00741 14.5742 5.00015C14.5629 4.9999 14.5516 4.99995 14.5403 5.0004H2.63458C2.29315 5.0004 2 5.24822 2 5.58964V16.4847C2 16.8262 2.29315 17.0928 2.63458 17.0928H3.69119C3.89637 15.585 5.285 14.529 6.79282 14.7341C8.01972 14.901 8.98457 15.8659 9.15153 17.0928H14.7706C14.9759 15.5849 16.3646 14.529 17.8725 14.7342C19.0993 14.9012 20.064 15.866 20.231 17.0928H22.3654C22.7068 17.0928 23 16.8262 23 16.4847V13.0707C22.9966 12.7053 22.8724 12.3514 22.6466 12.064Z" fill="#C7C7C7" />
            </svg>
            <svg className={`info__deliver ${!seen ? 'info__deliver--hoverable' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5 5L12 2L19 5V12.5C18 20 12 21 12 21C12 21 6 20 5 12.5V5ZM13.1325 9.07651L12.439 7.80489C12.2495 7.45742 11.7505 7.45742 11.561 7.80489L10.8675 9.07651C10.7956 9.20838 10.6682 9.30092 10.5206 9.32857L9.09692 9.59518C8.7079 9.66803 8.55372 10.1425 8.82562 10.4301L9.8207 11.4826C9.92389 11.5918 9.97255 11.7415 9.95322 11.8905L9.76683 13.3269C9.7159 13.7194 10.1195 14.0126 10.4771 13.8429L11.7856 13.2218C11.9213 13.1574 12.0787 13.1574 12.2144 13.2218L13.5229 13.8429C13.8805 14.0126 14.2841 13.7194 14.2332 13.3269L14.0468 11.8905C14.0275 11.7415 14.0761 11.5918 14.1793 11.4826L15.1744 10.4301C15.4463 10.1425 15.2921 9.66803 14.9031 9.59518L13.4794 9.32857C13.3318 9.30092 13.2044 9.20838 13.1325 9.07651Z" fill="#C4C4C4" />
            </svg>
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
