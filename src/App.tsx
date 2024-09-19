import { CssBaseline } from '@mui/material';
import { Converter, Header, MainContainer, Skeletons } from './components';
import { useEffect } from 'react';
import { useGetRates } from './hooks';

function App() {
  const { isLoading, getRates } = useGetRates();

  useEffect(() => {
    getRates();
    console.log({ isLoading });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <MainContainer>{isLoading ? <Skeletons /> : <Converter />}</MainContainer>
    </>
  );
}

export default App;
