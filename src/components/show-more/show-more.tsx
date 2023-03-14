import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  width: 110px;
  margin-left: auto;
  color: #00A0AB;
  border: none;

  .arrow {
    padding-top: 3px;
    margin-left: 5px;
  }
`;

function ShowMore() {
  return (
    <StyledButton >
      <span>Показать еще</span>
      <img className="arrow" src="img/arrow.svg" alt='arrow button'/>
    </StyledButton>
  );
}

export { ShowMore };
