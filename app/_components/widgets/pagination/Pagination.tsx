"use client"

import IconWrapper, { BackIcon, ForwardIcon } from '@components/icons'
import Button from '@components/buttons/Button'
import { Limit } from '@app/_types/cat_api'
import { useRouter } from 'next/navigation'
import { useSmoothScroll } from '@app/_hooks/animationHooks'

type PaginationArgs = {
  hrefBase: string,
  limit: Limit
  currentPage: number,
  isNextPage: boolean
}

export default function Pagination({ hrefBase, currentPage, isNextPage, limit }: PaginationArgs) {
  const router = useRouter()
  const { scrollTop } = useSmoothScroll()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
    router.push(`${hrefBase}limit=${limit}&page=${page}`)
    scrollTop()
  }

  return (
    <div className="flex gap-sm">
      <Button
        onClick={(e) => handleClick(e, currentPage - 1)}
        variant="primary"
        state={`${currentPage > 0 ? "isActive" : "isDisabled"}`}
        size="sm"
      >
        <IconWrapper Icon={BackIcon} size={"md"} />
      </Button>
      <Button
        onClick={(e) => handleClick(e, currentPage + 1)}
        variant="primary"
        state={isNextPage ? "isActive" : "isDisabled"}
        size="sm"
      >
        <IconWrapper Icon={ForwardIcon} size={"md"} />
      </Button>
    </div >
  )
}
