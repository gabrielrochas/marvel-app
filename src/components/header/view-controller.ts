import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { useDebounce } from '@/hooks/use-debounce'
import { marvelApi } from '@/models/marvel/api'
import { MarvelCharactersData, RequestParams } from '@/models/marvel/types'

const { getCharacters } = marvelApi

export function useHeaderViewController() {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce(search, 500)
  const [requestParams, setRequestParams] = useState<RequestParams>({
    limit: 20,
    offset: 0,
    page: 1,
  })

  const {
    data: characters,
    isFetching,
    isLoading,
  } = useQuery<MarvelCharactersData>({
    queryKey: ['search-characters', requestParams.page],
    queryFn: () =>
      getCharacters({
        limit: requestParams.limit,
        offset: requestParams.offset,
        nameStartsWith: debouncedValue,
      }),
    enabled: debouncedValue !== '',
  })
  const page = requestParams.page || 1
  const maxPages = Math.ceil(
    (characters?.data.total || 0) / requestParams.limit,
  )
  const onPageChange = (page: number) => {
    const offset = (page - 1) * requestParams.limit

    setRequestParams({ ...requestParams, page, offset })
  }

  return {
    characters,
    isFetching,
    isLoading,
    maxPages,
    onPageChange,
    page,
    requestParams,
    search,
    setSearch,
  }
}
