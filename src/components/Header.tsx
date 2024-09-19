import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { RatesMap } from '../models';

type HeaderProps = {
  isLoading: boolean;
  ratesMap: RatesMap | null;
};

export const Header: FC<HeaderProps> = ({ ratesMap }) => {
  const rateUSD = Number(ratesMap?.UAH);
  const rateEUR = Number(rateUSD / Number(ratesMap?.EUR));

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="md">
        <Toolbar variant="dense">
          <Typography variant="h5">CURRENCEE</Typography>

          <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
            <Typography variant="h6">
              USD: {Number(ratesMap?.UAH).toFixed(2)}
            </Typography>
            <Typography variant="h6">EUR: {rateEUR.toFixed(2)}</Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
