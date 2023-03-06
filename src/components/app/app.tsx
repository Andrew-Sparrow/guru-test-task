import styled from 'styled-components';
import GlobalStyles from '../../styles/global';

import { Main } from '../main/main';
// import { fetchProductsList } from '../../store/api-actions';
// import { useAppDispatch } from '../../store/store';

const StyledApp = styled.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media(min-width: 321px) {
    width: 968px;
    padding-left: 0;
    padding-right: 0;
  }
`;


function App(): JSX.Element {
  // const dispatch = useAppDispatch();
  // dispatch(fetchProductsList());

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h1>Похожие объявления</h1>
        <Main />
      </StyledApp>
    </>
  );
}

export default App;
