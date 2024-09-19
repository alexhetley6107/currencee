import { Typography } from '@mui/material';
import { Converter, Header, Layout, Skeletons } from './components';
import { useGetRates } from './hooks';

function App() {
  const { isLoading, ratesMap } = useGetRates();

  const isError = !isLoading && !ratesMap;

  return (
    <>
      <Header isLoading={isLoading} ratesMap={ratesMap} />
      <Layout>
        {isError ? (
          <Typography variant="h4">Something went wrong :/</Typography>
        ) : (
          <>{isLoading ? <Skeletons /> : <Converter ratesMap={ratesMap} />}</>
        )}
      </Layout>
    </>
  );
}

export default App;
