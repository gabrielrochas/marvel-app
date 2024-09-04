import { Logo } from '../ui/logo'

export function Header() {
  return (
    <div className='sticky top-0 left-0 z-10 h-[120px] w-full bg-background/50 py-10 text-primary-red backdrop-blur-sm'>
      <Logo className='m-auto' />
    </div>
  )
}
