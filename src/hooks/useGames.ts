import { useQuery } from "@tanstack/react-query"
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";
import ApiClient, { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number
}
const apiClient = new ApiClient<Game>('/games');

const useGames =  (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games'],
  queryFn: () => apiClient.getAll({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    },
  })
})

export default useGames;
