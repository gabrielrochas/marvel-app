import { ChevronsLeft, ChevronsRight } from 'lucide-react'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { createI18n } from '@/lib/i18n'

import languages from './i18n/language.json'
import { useDataPaginationViewController } from './view-controller'

const i18n = createI18n(languages)
export function DataPagination() {
  const { page, onPageChange, maxPages } = useDataPaginationViewController()

  return (
    <Pagination className='my-4'>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            isActive={page > 1}
            aria-disabled={page === 1}
            onClick={() => onPageChange(1)}
            title={i18n('first_page')}
          >
            <ChevronsLeft className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            isActive={page > 1}
            aria-disabled={page === 1}
            onClick={() => onPageChange(page - 1 < 1 ? 1 : page - 1)}
            title={i18n('next_page')}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            isActive={page < maxPages}
            aria-disabled={page === maxPages}
            onClick={() =>
              onPageChange(page + 1 > maxPages ? maxPages : page + 1)
            }
            title={i18n('next_page')}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            isActive={page < maxPages}
            aria-disabled={page === maxPages}
            onClick={() => onPageChange(maxPages)}
            title={i18n('last_page')}
          >
            <ChevronsRight className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
