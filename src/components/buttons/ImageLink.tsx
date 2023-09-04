import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@components/buttons/Button";
import { ImageLinkType } from "@components/buttons/buttons.types";

// Link nested with image and button like element

export function ImageLink({ href, name, image: { src, alt, width, ...imageProps }, ...linkProps }: ImageLinkType) {
  return (
    <div className="group">
      <Link href={href} {...linkProps}>
        <div className={`w-[138px] h-[198px] flex items-center justify-center rounded-[20px] border-4 border-white/60 ${getBgColorByName(name)} group-hover:border-white group-active:border-red-100 transition-all`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            quality={100}
            className="object-contain"
            {...imageProps}
          />
        </div>
        {name
          ?
          <div className={buttonVariants({ variant: "activableWhite", size: "sm", fullWidth: "full", className: "mt-[10px]" })}>
            {name}
          </div>
          : null
        }
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