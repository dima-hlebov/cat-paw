// components
import { Logo } from '@components/navigations/Logo'
import { MainNavigation } from '@components/navigations'
import { ThemeSwitcher } from '@app/_components/widgets'

export default function Intro() {
  return (
    <section className="sticky top-[30px] 2xl:pl-[117px]">
      <div className='flex justify-between'>
        <Logo />
        <ThemeSwitcher />
      </div>

      <div className="mt-[80px]">
        <p className="text-[44px] font-medium leading-[58px] text-dark dark:text-white">Hi!👋</p>
        <h1 className="text-xl text-light-dark dark:text-light-dark">Welcome to MacPaw Bootcamp 2023!</h1>
      </div>

      <h2 className="mt-[60px] text-xl">Lets start using The Cat API</h2>
      <MainNavigation />
    </section>
  )
}
