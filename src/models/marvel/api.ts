import { api } from '@/lib/api'
import { MarvelCharactersData, RequestParams } from './types'

export const marvelApi = {
  getCharacters: async ({ limit, offset }: RequestParams) => {
    const { data } = await api.get<MarvelCharactersData>('/characters', {
      params: {
        limit,
        offset,
      },
    })

    return data
  },
}
