import { getEmployeeAPI } from '@apis';
import { QUERY_KEY } from '@constants';
import { useQuery } from '@tanstack/react-query';

export const useGetClients = (params: any) =>
  useQuery(
    [
      QUERY_KEY.EMPLOYEE,
      params.page,
      params.take,
      params.searchByName,
      params.searchByEmail,
    ],
    async () => {
      const { data } = await getEmployeeAPI(params);
      return data;
    },
  );
