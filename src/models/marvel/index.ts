import { useState } from 'react'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { marvelApi } from './api'
import { MarvelCharactersData, RequestParams } from './types'

const { getCharacters } = marvelApi

export function useCharactersModel() {
  const [requestParams, setRequestParams] = useState<RequestParams>({
    limit: 20,
    offset: 0,
    page: 1,
  })

  const {
    data: characters,
    error,
    isError,
    isFetching,
    isLoading,
    isPlaceholderData,
    status,
  } = useQuery<MarvelCharactersData>({
    queryKey: ['characters', requestParams.page],
    queryFn: () =>
      getCharacters({
        limit: requestParams.limit,
        offset: requestParams.offset,
      }),
    placeholderData: keepPreviousData,
  })

  const onPageChange = (page: number) => {
    const offset = (page - 1) * requestParams.limit

    setRequestParams({ ...requestParams, page, offset })
  }

  return {
    characters,
    error,
    isError,
    isFetching,
    isLoading,
    isPlaceholderData,
    onPageChange,
    requestParams,
    setRequestParams,
    status,
  }
}
