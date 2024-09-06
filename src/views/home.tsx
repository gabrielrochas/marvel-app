import { MarvelCharacters } from '@/components/characters'
import { CirclePacking } from '@/components/charts/circle-packing'
import { DataPagination } from '@/components/data-pagination'

export function Home() {
  return (
    <div className='relative'>
      <MarvelCharacters />
      <DataPagination />
      <CirclePacking />
    </div>
  )
}
