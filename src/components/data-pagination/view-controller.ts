import { useData } from '@/hooks/use-data'

export function useDataPaginationViewController() {
  const { characters, requestParams, setRequestParams } = useData()

  const page = requestParams.page || 1
  const maxPages = Math.ceil(
    (characters?.data.total || 0) / requestParams.limit,
  )

  const onPageChange = (page: number) => {
    const offset = (page - 1) * requestParams.limit

    setRequestParams({ ...requestParams, page, offset })
  }
  return { page, onPageChange, maxPages }
}
