import { Converter, Header, Layout, Skeletons } from './components';
import { useGetRates } from './hooks';

function App() {
  const { isLoading, ratesMap } = useGetRates();

  return (
    <>
      <Header isLoading={isLoading} ratesMap={ratesMap} />
      <Layout>
        {isLoading ? <Skeletons /> : <Converter ratesMap={ratesMap} />}
      </Layout>
    </>
  );
}

export default App;
