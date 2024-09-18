import { useState } from 'react';

const api_key = import.meta.env.VITE_CURRENCY_API_KEY;

export const useGetCurrencies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currencies, setCurrencies] = useState([]);

  const getCurrencies = async () => {
    setIsLoading(true);

    try {
      const currencies = await fetch(
        `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${api_key}`
      )
        .then((res) => res.json())
        .then((data) => data?.rates || {});
      console.log(currencies);

      setCurrencies([]);
      console.log({ api_key });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, getCurrencies, currencies };
};
