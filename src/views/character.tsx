import { Character } from '@/components/character'
import type { CharacterData } from '@/models/marvel/types'

interface CharacterProps {
  character: CharacterData
}

export function CharacterView({ character }: CharacterProps) {
  return (
    <div>
      <Character character={character.data.results[0]} />
    </div>
  )
}
