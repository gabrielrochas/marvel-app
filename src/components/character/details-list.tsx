import { createI18n } from '@/lib/i18n'
import { CharacterInfoBase } from '@/models/marvel/types'
interface DetailsListProps {
  label: string
  items: CharacterInfoBase['items']
}

const language = {
  no: {
    'pt-BR': 'Sem',
    en: 'No',
    es: 'Sin',
  },
}
const i18n = createI18n(language)
export function DetailsList({ label, items }: DetailsListProps) {
  const title = label.toLocaleLowerCase()

  return (
    <div>
      <h2 className='font-bold text-3xl capitalize'>{title}</h2>
      <ul>
        {items?.map(comic => <li key={comic.name}>{comic.name}</li>) || (
          <li>{`${i18n('no')} ${title}`}</li>
        )}
      </ul>
    </div>
  )
}
