import { CssBaseline } from '@mui/material';
import { Converter, Header, MainContainer } from './components';
import { useEffect } from 'react';
import { useGetCurrencies } from './hooks';

function App() {
  const { isLoading, getCurrencies } = useGetCurrencies();

  useEffect(() => {
    getCurrencies();
    console.log({ isLoading });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <MainContainer>
        <Converter isLoading={isLoading} />
      </MainContainer>
    </>
  );
}

export default App;
