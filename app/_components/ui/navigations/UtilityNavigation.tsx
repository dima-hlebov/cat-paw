import { Navigation } from "@components/ui/navigations/Nav";
import { Link, buttonVariants } from "@components/buttons";
import IconWrapper, { DislikeIcon, FavIcon, LikeIcon } from "@components/icons";
export function UtilityNavigation() {
  const buttonVariant = buttonVariants({ variant: "activableWhite", size: "md" })
  return (
    <Navigation className="flex gap-[10px]">
      <Link href="/" className={buttonVariant} >
        <IconWrapper Icon={LikeIcon} size="md" />
      </Link>
      <Link href="/" className={buttonVariant} >
        <IconWrapper Icon={FavIcon} size="md" />
      </Link>
      <Link href="/" className={buttonVariant} >
        <IconWrapper Icon={DislikeIcon} size="md" />
      </Link>
    </Navigation>
  )
}
