import { ChevronsLeft, ChevronsRight } from 'lucide-react'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface PaginationSearchProps {
  page: number
  maxPages: number
  onPageChange: (page: number) => void
}
export function SearchPagination({
  page,
  maxPages,
  onPageChange,
}: PaginationSearchProps) {
  return (
    <Pagination className='my-4'>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            isActive={page > 1}
            aria-disabled={page === 1}
            onClick={() => onPageChange(1)}
          >
            <ChevronsLeft className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            isActive={page > 1}
            aria-disabled={page === 1}
            onClick={() => onPageChange(page - 1 < 1 ? 1 : page - 1)}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            isActive={page < maxPages}
            aria-disabled={page === maxPages}
            onClick={() =>
              onPageChange(page + 1 > maxPages ? maxPages : page + 1)
            }
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            isActive={page < maxPages}
            aria-disabled={page === maxPages}
            onClick={() => onPageChange(maxPages)}
          >
            <ChevronsRight className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
