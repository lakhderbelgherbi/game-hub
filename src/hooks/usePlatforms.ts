import ms from "ms";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query"

export interface Platform {
    id: number,
    name: string,
    slug:string
  }
  const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  // initialData: { count: platfroms.length, results: platforms}
})


export default usePlatforms;