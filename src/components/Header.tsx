import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { RatesMap } from '../models';

type HeaderProps = {
  isLoading: boolean;
  ratesMap: RatesMap | null;
};

export const Header: FC<HeaderProps> = () => {
  return (
    <AppBar position="fixed" color="secondary">
      <Container>
        <Toolbar variant="dense">
          <Typography variant="h5">CURRENCEE</Typography>

          <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
            <Typography variant="h6">{`USD: ${40.9}`}</Typography>
            <Typography variant="h6">{`USD: ${45.9}`}</Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
