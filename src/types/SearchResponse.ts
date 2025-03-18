type SearchData = {
  results: Array<object>;
  total_pages: number;
  [field: string]: unknown;
};

export type SearchResponse = Partial<SearchData>;
