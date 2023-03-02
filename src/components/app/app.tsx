import styled from 'styled-components';
import GlobalStyles from '../../styles/global';

const StyledApp = styled.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;

  @media(min-width: 321px) {
    width: 968px;
    padding-left: 0;
    padding-right: 0;
  }
`;


function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <StyledApp>Hello, world!</StyledApp>;
    </>
  );
}

export default App;
