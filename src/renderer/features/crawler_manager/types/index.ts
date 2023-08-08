export interface ICrawlerListItem {
  _id: string;
  url: string;
  userId: string;
  crawlerId: string;
  same_domain: boolean;
  limit: number;
  status: number;
}

export interface StatusMap {
  [key: number]: { label: string; colorScheme: string };
}
