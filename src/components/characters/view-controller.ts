import { useData } from '@/hooks/use-data'

export function useCharactersController() {
  const { characters, isError, isFetching, isLoading } = useData()

  return { characters, isError, isFetching, isLoading }
}
