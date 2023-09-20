import React from 'react'
import IconWrapper from '@components/icons/IconWrapper'
import { PawIcon } from '@components/icons'
import { Link } from '@components/buttons'

export function Logo() {
  return (
    <div>
      <Link href="/"><IconWrapper Icon={PawIcon} className="text-dark dark:text-white" /></Link>
    </div>
  )
}
