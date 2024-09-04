import { Card, CardContent } from '../ui/card'
import { LoadingCard } from '../ui/loading-card'
import { useCharactersController } from './view-controller'

export function MarvelCharacters() {
  const { characters, isError, isFetching, isLoading } =
    useCharactersController()

  if (isError) {
    return <div>Error</div>
  }

  if (isFetching || isLoading) {
    return (
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className='list grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4'>
      {characters?.data.results.map(character => (
        <a href={`/${character.id}`} key={character.id}>
          <Card>
            <CardContent className='item group relative h-[400px] w-full rounded-lg p-0'>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className='absolute top-0 h-full w-full rounded-md object-cover '
              />
              <span className='absolute bottom-0 left-0 z-1 h-full w-full rounded-md bg-black/50 transition-transform duration-300 group-hover:h-full group-hover:scale-100 md:h-0 md:scale-0 ' />
              <h3 className='absolute top-0 left-0 z-1 p-4 font-bold text-4xl text-background opacity-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-opacity duration-500 group-hover:opacity-100 md:opacity-0'>
                {character.name}
              </h3>
              <div className='text-sm'>
                Comics: {character.comics.items.length}
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  )
}
