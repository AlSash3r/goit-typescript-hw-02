import axios from "axios";
import { SearchResponse } from "../types/SearchResponse";
const mainKey = async (
  query: string,
  page = 1
): Promise<SearchResponse> => {
  const { data } = await axios.get<Record<string, unknown>>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: "2zuWpbD3NRHRYDMzU9AGeO6oj79qHraM3kQnPj-J2B4",
        query,
        page,
      },
    }
  );
  return data;
};
export default mainKey;