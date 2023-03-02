import styled from 'styled-components';
import GlobalStyles from '../../styles/global';

const StyledApp = styled.div`
  width: 320px;

  @media(min-width: 920px) {
    width: 968px;
  }
`;


function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <StyledApp>Hello, world!</StyledApp>;
    </>);
}

export default App;
