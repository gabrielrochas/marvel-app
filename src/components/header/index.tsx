import { Link } from '@tanstack/react-router'
import { MoveLeftIcon, SearchIcon } from 'lucide-react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { createI18n } from '@/lib/i18n'

import { Input } from '../ui/input'
import { LoadingSearch } from '../ui/loading-search'
import { Logo } from '../ui/logo'
import languages from './i18n/languages.json'
import { SearchPagination } from './pagination-search'
import { useHeaderViewController } from './view-controller'

const i18n = createI18n(languages)
export function Header() {
  const {
    characters,
    isFetching,
    isLoading,
    maxPages,
    onPageChange,
    page,
    requestParams,
    search,
    setSearch,
  } = useHeaderViewController()

  return (
    <header className='sticky top-0 left-0 z-10 h-[100px] w-full bg-foreground/80 py-10 text-primary-red backdrop-blur-sm md:h-[120px] lg:bg-background/50'>
      <div className='flex h-full w-full items-center justify-between px-4 '>
        <Link
          to='/'
          title={i18n('back')}
          activeProps={{
            className: 'cursor-default pointer-events-none',
          }}
          className='opacity-100 transition-opacity duration-300 ease-in-out data-[status=active]:opacity-0'
        >
          <MoveLeftIcon />
        </Link>

        <Logo className='justify-self-center opacity-100 transition-opacity duration-300 ease-in-out peer-focus:opacity-0' />

        <Drawer>
          <DrawerTrigger>
            <SearchIcon className='h-6 w-6' />
          </DrawerTrigger>
          <DrawerContent className='h-1/2 p-4'>
            <DrawerHeader>
              <DrawerTitle>{i18n('search_for_character')}</DrawerTitle>
              <DrawerDescription aria-hidden className='sr-only'>
                {i18n('hidden_information')}
              </DrawerDescription>
              <Input
                value={search || ''}
                onChange={e => setSearch(e.target.value)}
                className='w-full md:w-1/3'
                placeholder={i18n('search_for_name')}
              />
            </DrawerHeader>
            {isFetching || isLoading ? (
              <div className='grid grid-cols-1 gap-4 overflow-auto md:grid-cols-2'>
                {Array.from({ length: 8 }).map((_, index) => (
                  <LoadingSearch key={index} />
                ))}
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-4 overflow-auto md:grid-cols-2'>
                {characters?.data.results.map(character => (
                  <DrawerClose asChild>
                    <Link
                      to={`/character/${character.id}`}
                      key={character.id}
                      className='flex items-center gap-3 border-slate-200 border-b p-4 last:border-b-0'
                      title={character.name}
                    >
                      <img
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        alt={character.name}
                        className='h-8 w-8 rounded-md object-cover'
                      />
                      {character.name}
                    </Link>
                  </DrawerClose>
                ))}
              </div>
            )}
            <DrawerFooter>
              {characters?.data.total &&
                characters?.data?.total > requestParams.limit && (
                  <SearchPagination
                    onPageChange={onPageChange}
                    maxPages={maxPages}
                    page={page}
                  />
                )}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}
