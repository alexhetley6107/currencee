import { useEffect, useState } from 'react';
import { RatesMap } from '../models';
import { axiosGetRates } from '../axios';

export const useGetRates = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ratesMap, setRatesMap] = useState<RatesMap | null>(null);

  const getRates = async () => {
    try {
      const rates = await axiosGetRates();
      setRatesMap(rates);
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
