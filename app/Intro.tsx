// components
import { Logo } from '@components/navigations/Logo'
import { MainNavigation } from '@app/_components/navigations'

export default function Intro() {
  return (
    <section className="sticky top-[30px] 2xl:pl-[117px]">
      <Logo />

      <div className="mt-[80px]">
        <p className="text-[44px] font-medium leading-[58px] text-dark">Hi!👋</p>
        <h1 className="text-2xl text-light-dark">Welcome to MacPaw Bootcamp 2023!</h1>
      </div>

      <h2 className="mt-[60px]">Lets start using The Cat API</h2>
      <MainNavigation />
    </section>
  )
}
