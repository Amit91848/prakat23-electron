import axios from 'axios';
import { useMutation } from 'react-query';
import { queryClient } from 'renderer/lib/react-query';
import { ICrawlerListItem } from '../types';

interface CreateCrawlerDTO {
  url: string;
  limit: number;
  same_domain: boolean;
  status?: number;
}

export const createCrawler = async ({
  url,
  limit,
  same_domain,
}: CreateCrawlerDTO) => {
  return await axios.post('http://localhost:8000/crawl_manager/start', {
    url,
    limit,
    same_domain,
  });
};

export const useCreateDiscussion = () => {
  return useMutation({
    onMutate: async (newCrawler) => {
      await queryClient.cancelQueries('crawlers');

      const previousCrawlers =
        queryClient.getQueryData<ICrawlerListItem[]>('crawlers');

      console.log(previousCrawlers);

      // Ensure previousCrawlers is an array before spreading it
      const updatedCrawlers = previousCrawlers
        ? [...previousCrawlers, { ...newCrawler, status: 0 }]
        : [{ ...newCrawler, status: 0 }];

      queryClient.setQueryData('crawlers', updatedCrawlers);

      return { previousCrawlers };
    },
    onError: (_, __, context: any) => {
      if (context?.newCrawler) {
        queryClient.setQueryData('crawlers', context.previousCrawlers);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('crawlers');
    },
    mutationFn: createCrawler,
  });
};
