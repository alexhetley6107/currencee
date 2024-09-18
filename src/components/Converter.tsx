import { FC } from 'react';
import { Stack } from '@mui/material';
import { Skeletons } from './ui';
import { CurrencyItem } from './CurrencyItem';

type ConverterProps = {
  isLoading?: boolean;
};

export const Converter: FC<ConverterProps> = ({ isLoading }) => {
  return (
    <Stack spacing={2}>
      {isLoading ? (
        <>
          <Skeletons />
          <Skeletons />
        </>
      ) : (
        <>
          <CurrencyItem />
          <CurrencyItem />
        </>
      )}
    </Stack>
  );
};
