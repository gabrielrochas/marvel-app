import { api } from '@/lib/api'

import { marvelApi } from '../api'
import { MarvelCharactersData, RequestParams } from '../types'

const { getCharacters } = marvelApi
vi.mock('@/lib/api')

describe('getCharacters', () => {
  const mockApiGet = api.get as vi.Mock

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should make a successful API call with valid parameters', async () => {
    const params: RequestParams = {
      limit: 10,
      offset: 0,
      nameStartsWith: 'Iron',
    }
    const mockResponse: MarvelCharactersData = {
      data: {
        count: 10,
        limit: 10,
        offset: 0,
        results: [],
        total: 100,
      },
    }

    mockApiGet.mockResolvedValue({ data: mockResponse })

    const result = await getCharacters(params)
    expect(result).toEqual(mockResponse)
    expect(mockApiGet).toHaveBeenCalledTimes(1)
    expect(mockApiGet).toHaveBeenCalledWith('/characters', {
      params: {
        limit: 10,
        offset: 0,
        nameStartsWith: 'Iron',
      },
    })
  })

  it('should make a successful API call with default parameters', async () => {
    const params: RequestParams = {
      limit: 10,
      offset: 0,
    }
    const mockResponse: MarvelCharactersData = {
      data: {
        count: 10,
        limit: 10,
        offset: 0,
        results: [],
        total: 100,
      },
    }

    mockApiGet.mockResolvedValue({ data: mockResponse })

    const result = await getCharacters(params)
    expect(result).toEqual(mockResponse)
    expect(mockApiGet).toHaveBeenCalledTimes(1)
    expect(mockApiGet).toHaveBeenCalledWith('/characters', {
      params: {
        limit: 10,
        offset: 0,
        nameStartsWith: undefined,
      },
    })
  })

  it('should handle error for invalid API response', async () => {
    const params: RequestParams = {
      limit: 10,
      offset: 0,
      nameStartsWith: 'Iron',
    }
    const mockError = new Error('Invalid API response')

    mockApiGet.mockRejectedValue(mockError)

    await expect(getCharacters(params)).rejects.toThrow(mockError)
    expect(mockApiGet).toHaveBeenCalledTimes(1)
    expect(mockApiGet).toHaveBeenCalledWith('/characters', {
      params: {
        limit: 10,
        offset: 0,
        nameStartsWith: 'Iron',
      },
    })
  })

  it('should handle error for network error', async () => {
    const params: RequestParams = {
      limit: 10,
      offset: 0,
      nameStartsWith: 'Iron',
    }
    const mockError = new Error('Network error')

    mockApiGet.mockRejectedValue(mockError)

    await expect(getCharacters(params)).rejects.toThrow(mockError)
    expect(mockApiGet).toHaveBeenCalledTimes(1)
    expect(mockApiGet).toHaveBeenCalledWith('/characters', {
      params: {
        limit: 10,
        offset: 0,
        nameStartsWith: 'Iron',
      },
    })
  })
})
