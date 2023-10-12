'use client'

import { usePathname, useRouter } from 'next/navigation'

import Button, { Link, buttonVariants } from "@components/buttons";
import IconWrapper, { BackIcon } from "@components/icons";
import { twMerge } from 'tailwind-merge';

export function Breadcrumbs() {
    const router = useRouter()

    const slugs = usePathname().split("/").filter((str) => str !== "");

    const handleClick = () => {
        router.back()
    }

    return (
        <nav className="flex gap-sm">
            <Button
                variant="soft"
                size="sm"
                onClick={handleClick}
                aria-label="Navigate back">
                <IconWrapper Icon={BackIcon} />
            </Button>
            {slugs.map((slug, i) => {
                if (slugs.length - 1 === i) {
                    return (
                        <span key={i} className={twMerge(buttonVariants({ variant: "primary", state: "isDisabled" }), "bg-primary text-white")}>
                            {slug}
                        </span>
                    )
                } else {
                    return (
                        <Link
                            key={i}
                            href={"/" + slug}
                            className={buttonVariants({ variant: "soft", state: "isActive" })}
                            aria-label={`Navigate to ${slug}`}
                        >
                            {slug}
                        </Link>
                    )
                }
            })}
        </nav>
    )
}
