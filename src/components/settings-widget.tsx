import { useMemo } from 'react'

import { SettingsIcon } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { createI18n } from '@/lib/i18n'

const languages = {
  change_language: {
    'pt-BR': 'Mudar idioma',
    en: 'Change language',
    es: 'Cambiar idioma',
  },
}

const i18n = createI18n(languages)

export function SettingsWidget() {
  const defaultLanguage = useMemo(() => {
    return sessionStorage.getItem('marvel:lang') ?? 'pt-BR'
  }, [])

  function switchLanguage(event: React.ChangeEvent<HTMLInputElement>) {
    const lang = event.target.value
    sessionStorage.setItem('marvel:lang', lang)
    location.reload()
  }

  return (
    <div className='fixed right-4 bottom-4 z-20 m-auto h-6 w-6 text-primary-red drop-shadow-title'>
      <Dialog>
        <DialogTrigger className='transition-all duration-300 hover:rotate-45 data-[state=open]:rotate-45 data-[state=open]:text-primary-red'>
          <SettingsIcon className='h-6 w-6' />
        </DialogTrigger>
        <DialogContent className='space-y-6'>
          <DialogHeader>
            <DialogTitle>{i18n('change_language')}</DialogTitle>
            <DialogDescription
              aria-hidden
              className='sr-only'
            ></DialogDescription>

            <div className='grid grid-cols-[auto_1fr] place-content-start gap-2'>
              <input
                type='radio'
                name='lang'
                value='pt-BR'
                id='pt-BR'
                checked={defaultLanguage === 'pt-BR'}
                className='size-6'
                onChange={switchLanguage}
              />
              <label className='justify-self-start' htmlFor='pt-BR'>
                Português do Brasil
              </label>
              <input
                type='radio'
                name='lang'
                value='en'
                id='en'
                checked={defaultLanguage === 'en'}
                className='size-6'
                onChange={switchLanguage}
              />
              <label className='justify-self-start' htmlFor='en'>
                English
              </label>
              <input
                type='radio'
                name='lang'
                value='es'
                id='es'
                checked={defaultLanguage === 'es'}
                className='size-6'
                onChange={switchLanguage}
              />
              <label className='justify-self-start' htmlFor='es'>
                Español
              </label>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
