import NextLink from "next/link";
import { LinkType } from "@components/buttons/buttons.types";

export function Link({ href, className, children, ...props }: LinkType) {
    return (
        <div className="group">
            <NextLink href={href} className={"block " + className} {...props}>
                {children}
            </NextLink>
        </div>
    )
}
