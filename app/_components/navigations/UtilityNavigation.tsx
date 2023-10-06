import { Navigation } from "@layouts/index";
import { Link, buttonVariants } from "@components/buttons";
import IconWrapper, { DislikeIcon, FavIcon, LikeIcon } from "@components/icons";

export function UtilityNavigation() {
  const buttonVariant = buttonVariants({ variant: "monochrome", state: "isActive", size: "md" })
  return (
    <Navigation className="flex gap-sm">
      <Link href="/likes" className={buttonVariant} >
        <IconWrapper Icon={LikeIcon} size="md" />
      </Link>
      <Link href="/favourites" className={buttonVariant} >
        <IconWrapper Icon={FavIcon} size="md" />
      </Link>
      <Link href="/dislikes" className={buttonVariant} >
        <IconWrapper Icon={DislikeIcon} size="md" />
      </Link>
    </Navigation>
  )
}