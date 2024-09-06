import { api } from '@/lib/api'
import { CharacterData, MarvelCharactersData, RequestParams } from './types'

export const marvelApi = {
  getCharacters: async ({ limit, offset, nameStartsWith }: RequestParams) => {
    const { data } = await api.get<MarvelCharactersData>('/characters', {
      params: {
        limit,
        offset,
        nameStartsWith,
      },
    })

    return data
  },

  getCharacter: async (id: number) => {
    const { data } = await api.get<CharacterData>(`/characters/${id}`)

    return data
  },
}
