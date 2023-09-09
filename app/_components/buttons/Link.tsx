import NextLink from "next/link";
import { LinkProps } from "@components/buttons";

export function Link({ href, className, children, ...props }: LinkProps) {
    return (
        <NextLink href={href} className={"block " + className} {...props}>
            {children}
        </NextLink>
    )
}
