import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@components/buttons/Button";
import { ImageLinkPropss } from "@components/buttons/buttons.types";

// Link nested with image and button like element

export function ImageLink({ href, name, image: { src, alt, width, ...imageProps }, ...linkProps }: ImageLinkPropss) {
  return (
    <div className="group">
      <Link href={href} {...linkProps}>
        {/* image is visible starting with tablets and higher */}
        <div className={`hidden md:flex items-center justify-center w-[138px] h-[198px]  rounded-md border-4 border-white/60 ${getBgColorByName(name)} group-hover:border-white group-active:border-red-100 transition-all duration-300`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            quality={100}
            className="object-contain"
            {...imageProps}
          />
        </div>
        <div className={buttonVariants({ variant: "monochrome", state: "isActive", size: "sm", className: "mt-sm" })}>
          {name}
        </div>
      </Link>
    </div>
  );
}

function getBgColorByName(name: string): string {
  switch (name) {
    case "Voting":
      return "bg-indigo-300";
    case "Breeds":
      return "bg-green-300";
    case "Gallery":
      return "bg-amber-200";
    default:
      return "bg-secondary";
  }
}