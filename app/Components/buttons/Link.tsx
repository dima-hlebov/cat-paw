import { default as NextLink, LinkProps } from "next/link";
import { LinkType } from "../ComponentTypes";

export default function Link({ href, className, children, ...props }: LinkType) {
    return (
        <div className="group">
            <NextLink href={href} className={"block " + className} {...props}>
                {children}
            </NextLink>
        </div>
    )
}
