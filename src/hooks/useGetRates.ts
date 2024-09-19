import { useState } from 'react';
import { RatesMap } from '../models';

const api_key = import.meta.env.VITE_CURRENCY_API_KEY;
const url = 'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=';

export const useGetRates = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ratesMap, setRatesMap] = useState<RatesMap | null>(null);

  const getRates = async () => {
    setIsLoading(true);

    try {
      const rates = await fetch(`${url}${api_key}`)
        .then((res) => res.json())
        .then((data) => data?.rates || {});
      console.log(rates);
      setRatesMap(null);
      console.log({ api_key });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, getRates, ratesMap };
};
