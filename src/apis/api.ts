import { API_URL } from '@constants';
import axios from 'axios';

export const getEmployeeAPI = (params: any) =>
  axios.get(API_URL.EMPLOYEE, { params });
