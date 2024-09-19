import axios from 'axios';
import { RatesMap } from '../models';

const api_key = import.meta.env.VITE_CURRENCY_API_KEY;
const baseUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=';
const url = `${baseUrl}${api_key}`;

interface ApiResponse {
  rates: RatesMap;
}

export const axiosGetRates = () => {
  return axios.get<ApiResponse>(url).then(({ data }) => data.rates);
};
