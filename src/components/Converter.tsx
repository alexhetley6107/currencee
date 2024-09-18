import { FC } from 'react';
import { CurrencyItem } from './CurrencyItem';
import { Stack } from '@mui/material';

type ConverterProps = {
  loading?: boolean;
};

export const Converter: FC<ConverterProps> = () => {
  return (
    <Stack spacing={2}>
      <CurrencyItem />
      <CurrencyItem />
    </Stack>
  );
};
