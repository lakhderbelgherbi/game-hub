import { useQuery } from "@tanstack/react-query";
// import genres from "../data/genres";
import ApiClient, { FetchResponse } from "../services/api-client";
// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new ApiClient<Genre>('/genres');
// const useGenres = () => useData<Genre>('/genres');
const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 Hours
    // initialData: { count: genres.length, results: genres },
  });

export default useGenres;
