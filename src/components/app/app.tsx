import { useEffect } from 'react';

import styled from 'styled-components';
import GlobalStyles from '../../styles/global';

import { Main } from '../main/main';
import { fetchProductsList } from '../../store/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ShowMore } from '../show-more/show-more';

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
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsList());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h1>Похожие объявления</h1>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>An error occured: {error}</h2>}
        <Main />
        <ShowMore />
      </StyledApp>
    </>
  );
}

export default App;
