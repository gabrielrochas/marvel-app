import {
  ErrorComponent,
  ErrorComponentProps,
  createFileRoute,
  useRouter,
} from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { marvelApi } from '@/models/marvel/api'
import { CharacterView } from '@/views/character'
import {
  useQueryErrorResetBoundary,
  useSuspenseQuery,
} from '@tanstack/react-query'
import { useEffect } from 'react'

const { getCharacter } = marvelApi
export const Route = createFileRoute('/character/$characterId')({
  errorComponent: CharacterErrorComponent,
  component: CharacterCharacterIdRoute,
})

function CharacterErrorComponent({ error }: ErrorComponentProps) {
  const router = useRouter()
  if (error instanceof Error) {
    return <div>{error.message}</div>
  }

  const queryErrorResetBoundary = useQueryErrorResetBoundary()

  useEffect(() => {
    queryErrorResetBoundary.reset()
  }, [queryErrorResetBoundary])

  return (
    <div>
      Character Not Found
      <Button onClick={() => router.invalidate()}>Tentar novamente</Button>
      <ErrorComponent error={error} />
    </div>
  )
}

function CharacterCharacterIdRoute() {
  const characterId = Route.useParams().characterId

  const { data: character } = useSuspenseQuery({
    queryKey: ['character', characterId],
    queryFn: () => getCharacter(Number(characterId)),
  })

  return <CharacterView character={character} />
}
