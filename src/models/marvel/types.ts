export type Character = {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  comics: { items: { name: string }[] }
}

export type Comics = {
  id: number
  title: string
  textObject: TextObject[]
  thumbnail: {
    path: string
    extension: string
  }
}

type TextObject = {
  type: string
  language: string
  text: string
}

export type MarvelCharactersData = {
  data: {
    count: number
    limit: number
    offset: number
    results: Character[]
    total: number
  }
}

export interface RequestParams {
  limit: number
  offset: number
  page?: number
}
