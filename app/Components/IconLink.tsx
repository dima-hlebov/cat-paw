import Link from "next/link";
import { IconLinkType } from "./ComponentTypes";

export default function IconLink({ href, Icon }: IconLinkType) {
    return (
        <div className="group w-fit">
            <Link
                href={href}
                className="flex h-full justify-center items-center p-[15px] rounded-[20px] bg-white group-hover:bg-primary/20 group-active:bg-primary transition-all"
            >
                <Icon className="text-primary group-active:text-white transition-all" />
            </Link>
        </div>
    )
}
