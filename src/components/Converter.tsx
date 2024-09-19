import { FC, useState } from 'react';
import { ConverterData, currencies, RatesMap } from '../models';
import { SelectChangeEvent, Stack } from '@mui/material';
import { Input, Select } from './ui';
import { getConvertedData } from '../utils';

type ConverterProps = {
  ratesMap: RatesMap | null;
};

export const Converter: FC<ConverterProps> = ({ ratesMap }) => {
  const [data, setData] = useState<ConverterData>({
    startAmount: 1,
    startCurrency: 'USD',
    endAmount: 1,
    endCurrency: 'USD',
  });

  const onChangeCurrency = (e: SelectChangeEvent<unknown>) => {
    const { name, value } = e.target;
    setData((prev) =>
      getConvertedData(ratesMap, name, value as keyof RatesMap, prev)
    );
  };

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => getConvertedData(ratesMap, name, Number(value), prev));
  };

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ px: 1, pb: 2 }}>
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
      <Stack direction="row" spacing={2} sx={{ px: 1, pb: 2 }}>
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
