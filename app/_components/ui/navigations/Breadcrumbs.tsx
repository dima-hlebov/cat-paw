'use client'

import { usePathname } from 'next/navigation'

import { Link, buttonVariants } from "@components/buttons";
import IconWrapper, { BackIcon } from "@components/icons";

// To Fix:
// 1. Last item is span
// 2. Fix button classes

export function Breadcrumbs() {
    const slugs = usePathname().split("/").filter((str) => str !== "");
    return (
        <nav className="flex gap-[10px]">
            <Link
                href={"/"}
                className={buttonVariants({ variant: "primaryTransp", size: "sm" })}>
                <IconWrapper Icon={BackIcon} />
            </Link>
            {slugs.map((slug, i) => {
                console.log(slugs.length)
                return (
                    <Link
                        key={i}
                        href={slug}
                        className={slugs.length - 1 === i ? buttonVariants({ variant: "activablePrimary" }) : buttonVariants({ variant: "primaryTransp" })}
                    >
                        {slug}
                    </Link>
                )
            })}
        </nav>
    )
}
