export const currencies = [
  'USD',
  'EUR',
  'AED',
  'UAH',
  'GBP',
  'JPY',
  'CNY',
  'PLN',
];

export type CurrencyUnion = (typeof currencies)[number];

export type RatesMap = Record<CurrencyUnion, number>;

export type ConverterData = {
  startAmount: number;
  startCurrency: CurrencyUnion;
  endAmount: number;
  endCurrency: CurrencyUnion;
};
