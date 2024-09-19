import { useEffect, useState } from 'react';
import { RatesMap } from '../models';

const api_key = import.meta.env.VITE_CURRENCY_API_KEY;
const url = 'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=';

export const useGetRates = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ratesMap, setRatesMap] = useState<RatesMap | null>(null);

  const getRates = async () => {
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

  useEffect(() => {
    getRates();
  }, []);

  return { isLoading, getRates, ratesMap };
};
