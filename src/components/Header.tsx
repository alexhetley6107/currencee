import {
  AppBar,
  Container,
  Skeleton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { RatesMap } from '../models';

type HeaderProps = {
  isLoading: boolean;
  ratesMap: RatesMap | null;
};

export const Header: FC<HeaderProps> = ({ isLoading, ratesMap }) => {
  const rateUSD = Number(ratesMap?.UAH);
  const rateEUR = Number(rateUSD / Number(ratesMap?.EUR));

  const isError = !isLoading && !ratesMap;

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="md">
        <Toolbar variant="dense">
          <Typography variant="h5">CURRENCEE</Typography>

          {!isError && (
            <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
              {ratesMap ? (
                <>
                  <Typography variant="h6">
                    USD: {Number(ratesMap?.UAH).toFixed(2)}
                  </Typography>
                  <Typography variant="h6">
                    EUR: {rateEUR.toFixed(2)}
                  </Typography>
                </>
              ) : (
                <>
                  <Skeleton width={105} height={32} />
                  <Skeleton width={105} height={32} />
                </>
              )}
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
