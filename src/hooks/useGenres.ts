import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ms from "ms"
import ApiClient, { FetchResponse } from "../services/api-client";

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
    staleTime: ms('24h'), // 24 Hours
    initialData: { count: genres.length, results: genres, next: null },
  });

export default useGenres;
