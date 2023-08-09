import axios from 'axios';
import { IReport } from '../types';
import { ExtractFnReturnType, QueryConfig } from 'renderer/lib/react-query';
import { useQuery } from 'react-query';

export const getReports = async () => {
  const response = await axios.get<IReport[]>('http://localhost:8000/report/');
  return response.data;
};

type QueryFnType = typeof getReports;

type UseReportsOption = {
  config?: QueryConfig<QueryFnType>;
};

export const useReports = ({ config }: UseReportsOption = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['reports'],
    queryFn: () => getReports(),
  });
};
