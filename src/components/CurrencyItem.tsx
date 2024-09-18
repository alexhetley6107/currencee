import { Stack } from '@mui/material';
import { FC } from 'react';
import { Input, Select } from './ui';

type CurrencyItemProps = {
  amount?: number;
  currency?: string;
};

export const CurrencyItem: FC<CurrencyItemProps> = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Input />
      <Select />
    </Stack>
  );
};
