// components
import Logo from '@components/ui/Logo'
import { MainNavigation } from '@components/ui/navigations'

export default function Intro() {
  return (
    <section className="sticky top-[30px] md:pl-[117px]">
      <Logo />

      <div className="mt-[80px]">
        <p className="text-[44px] font-medium leading-[58px] text-accent">Hi!👋</p>
        <h1 className="text-xl">Welcome to MacPaw Bootcamp 2023!</h1>
      </div>

      <h2 className="mt-[60px]">Lets start using The Cat API</h2>
      <MainNavigation />
    </section>
  )
}
