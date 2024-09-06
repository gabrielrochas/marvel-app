import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import './index.css'
import { DataProvider } from './hooks/use-data.tsx'
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    lang: 'pt-BR',
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </QueryClientProvider>
  </StrictMode>,
)
