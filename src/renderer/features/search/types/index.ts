export interface SearchPageResponse {
  id: string;
  url: string;
  title: string;
  score: number;
  tags: string[];
  generated_report: number;
}

export interface ResponseBody<T> {
  data: T;
  description: string;
  response_type: string;
  status_code: number;
}
