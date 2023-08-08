import axios from 'axios';
import { useQuery } from 'react-query';

import { ResponseBody } from 'renderer/features/search/types';
import { ExtractFnReturnType, QueryConfig } from 'renderer/lib/react-query';

import { ICrawlerListItem } from '../types';

export const getCrawlers = async (): Promise<ICrawlerListItem[]> => {
  const { data } = await axios.get<ResponseBody<ICrawlerListItem[]>>(
    'http://localhost:8000/crawl_manager/'
  );
  return data.data;
};

type QueryFnType = typeof getCrawlers;

type UseCrawlersOption = {
  config?: QueryConfig<QueryFnType>;
};

export const useCrawlers = ({ config }: UseCrawlersOption = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['crawlers'],
    queryFn: () => getCrawlers(),
  });
};
