// components
import Logo from '@components/Logo'
import { MainNavigation } from '@components/layouts'



export function Intro() {
  return (
    <div className="md:pl-[117px]">
      <Logo />

      <div className="mt-[80px]">
        <p className="text-[44px] font-medium leading-[58px] text-accent">Hi!👋</p>
        <h1 className="text-xl">Welcome to MacPaw Bootcamp 2023!</h1>
      </div>

      <h2 className="mt-[60px]">Lets start using The Cat API</h2>
      <MainNavigation />
    </div>
  )
}
