import { api } from './api';
import type { AxiosRequestConfig } from 'axios';

export const getInvestments = (config?: AxiosRequestConfig) => {
  return api.get('investments', config).then((res) => res.data);
};

export default { getInvestments};
