import { FC, useState } from 'react';
import { ConverterData, currencies, RatesMap } from '../models';
import { SelectChangeEvent, Stack } from '@mui/material';
import { Input, Select } from './ui';

type ConverterProps = {
  ratesMap?: RatesMap | null;
};

export const Converter: FC<ConverterProps> = () => {
  const [data, setData] = useState<ConverterData>({
    startAmount: 0,
    startCurrency: 'USD',
    endAmount: 0,
    endCurrency: 'USD',
  });

  const onChangeCurrency = (e: SelectChangeEvent<unknown>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Input
          name="startAmount"
          value={data.startAmount}
          onChange={onChangeAmount}
        />
        <Select
          name="startCurrency"
          value={data.startCurrency}
          onChange={onChangeCurrency}
          items={currencies}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Input
          name="endAmount"
          value={data.endAmount}
          onChange={onChangeAmount}
        />
        <Select
          name="endCurrency"
          value={data.endCurrency}
          onChange={onChangeCurrency}
          items={currencies}
        />
      </Stack>
    </>
  );
};
