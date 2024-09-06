export type Character = {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export type ComicsList = {
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
    results: Results[]
    total: number
  }
}

export interface RequestParams {
  limit: number
  offset: number
  page?: number
  nameStartsWith?: string
}

export interface CharacterInfoBase {
  available: number
  collectionURI: string
  items: {
    resourceURI: string
    name: string
  }[]
}

export type CharacterComics = CharacterInfoBase
export type CharacterEvents = CharacterInfoBase
export type CharacterSeries = CharacterInfoBase
export type CharacterStories = CharacterInfoBase

type Results = Character & {
  comics: CharacterComics
  events: CharacterEvents
  series: CharacterSeries
  stories: CharacterStories
}
export interface CharacterData {
  data: {
    results: Results[]
  }
}
