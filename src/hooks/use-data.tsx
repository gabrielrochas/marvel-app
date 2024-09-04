import { createContext, useContext } from 'react'

import { useCharactersModel } from '@/models/marvel'
import type { MarvelCharactersData, RequestParams } from '@/models/marvel/types'

interface DataContextProps {
  characters?: MarvelCharactersData
  isError?: boolean
  isLoading?: boolean
  isFetching?: boolean
  requestParams: RequestParams
  setRequestParams: React.Dispatch<React.SetStateAction<RequestParams>>
}

const DataContext = createContext({} as DataContextProps)

export function DataProvider({ children }: React.PropsWithChildren<{}>) {
  const {
    characters,
    isError,
    isFetching,
    isLoading,
    setRequestParams,
    requestParams,
  } = useCharactersModel()

  const value = {
    characters,
    isError,
    isFetching,
    isLoading,
    requestParams,
    setRequestParams,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }

  return context
}
