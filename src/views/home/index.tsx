import { MarvelCharacters } from '@/components/characters'
import { DataPagination } from '@/components/data-pagination'

export function Home() {
  return (
    <div className='relative'>
      <MarvelCharacters />
      <DataPagination />
    </div>
  )
}
