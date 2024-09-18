import { CssBaseline } from '@mui/material';
import { Converter, Header, MainContainer } from './components';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <MainContainer>
        <Converter />
      </MainContainer>
    </>
  );
}

export default App;
