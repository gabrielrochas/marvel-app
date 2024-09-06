import { ArrowDown } from 'lucide-react'

import { createI18n } from '@/lib/i18n'
import type { CharacterData } from '@/models/marvel/types'

import { DetailsList } from './details-list'
import languages from './i18n/languages.json'

interface CharacterProps {
  character: CharacterData['data']['results'][0]
}

const i18n = createI18n(languages)

export function Character({ character }: CharacterProps) {
  return (
    <div className='space-y-6'>
      <div
        style={{
          backgroundImage: `url('${character.thumbnail.path}.${character.thumbnail.extension}')`,
        }}
        className='-mt-[100px] md:-mt-[120px] character-info relative flex h-svh w-full flex-col items-start justify-between bg-center bg-cover bg-no-repeat px-4 pb-4'
      >
        <h1 className='grow font-bold text-3xl text-white drop-shadow-title md:text-5xl'>
          {character.name}
        </h1>

        <p className='text-white text-xl drop-shadow-title'>
          {character.description.length
            ? character.description
            : 'no description'}
        </p>

        <div className='flex w-full justify-center '>
          <div className='fit animate-bounce rounded-full bg-white p-2 text-primary-red'>
            <ArrowDown className='h-6 w-6' />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 p-4'>
        <DetailsList label={i18n('comics')} items={character.comics.items} />
        <DetailsList label={i18n('series')} items={character.series.items} />
        <DetailsList label={i18n('stories')} items={character.stories.items} />
        <DetailsList label={i18n('events')} items={character.events.items} />
      </div>
    </div>
  )
}
