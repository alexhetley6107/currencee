import { ConverterData, RatesMap } from '../models';

export const getConvertedData = (
  ratesMap: RatesMap | null,
  name: string,
  value: number | keyof RatesMap,
  prev: ConverterData
): ConverterData => {
  if (!ratesMap) return prev;

  const oldStartRate = ratesMap[prev.startCurrency];
  const oldEndRate = ratesMap[prev.endCurrency];
  const oldStartAmount = prev.startAmount;

  switch (name) {
    case 'startAmount': {
      const newEndAmount = getFixedNumber(
        (Number(value) * oldEndRate) / oldStartRate
      );
      return {
        ...prev,
        startAmount: Number(value),
        endAmount: newEndAmount,
      };
    }
    case 'endAmount': {
      const newStartAmount = getFixedNumber(
        (Number(value) * oldStartRate) / oldEndRate
      );
      return {
        ...prev,
        endAmount: Number(value),
        startAmount: newStartAmount,
      };
    }
    case 'startCurrency': {
      const newStartRate = ratesMap[value as keyof RatesMap];
      const newEndAmount = getFixedNumber(
        (oldStartAmount * oldEndRate) / newStartRate
      );
      return {
        ...prev,
        startCurrency: value as keyof RatesMap,
        endAmount: newEndAmount,
      };
    }
    case 'endCurrency': {
      const newEndRate = ratesMap[value as keyof RatesMap];
      const newEndAmount = getFixedNumber(
        (oldStartAmount * newEndRate) / oldStartRate
      );
      return {
        ...prev,
        endCurrency: value as keyof RatesMap,
        endAmount: newEndAmount,
      };
    }

    default:
      return prev;
  }
};

const getFixedNumber = (num: number) => {
  return Number(num.toFixed(2));
};
