'use client'

import { usePathname, useRouter } from 'next/navigation'

import Button, { Link, buttonVariants } from "@components/buttons";
import IconWrapper, { BackIcon } from "@components/icons";

export function Breadcrumbs() {
    const router = useRouter()

    const slugs = usePathname().split("/").filter((str) => str !== "");

    return (
        <nav className="flex gap-sm">
            <Button
                variant="soft"
                size="sm"
                onClick={() => router.back()} >
                <IconWrapper Icon={BackIcon} />
            </Button>
            {slugs.map((slug, i) => {
                if (slugs.length - 1 === i) {
                    return (
                        <span key={i} className={buttonVariants({ variant: "primary", state: "isDisabled" })}>
                            {slug}
                        </span>
                    )
                } else {
                    return (
                        <Link
                            key={i}
                            href={slug}
                            className={buttonVariants({ variant: "primary", state: "isActive" })}
                        >
                            {slug}
                        </Link>
                    )
                }
            })}
        </nav>
    )
}
