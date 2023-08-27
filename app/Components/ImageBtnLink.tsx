import Link from "next/link";
import Image from "next/image";
import { ImageBtnLinkType } from "./ComponentTypes";

export default function ImageBtnLink({ href, name, image: { src, alt, width } }: ImageBtnLinkType) {
  return (
    <div className="group w-[138px]">
      <Link href={href}>
        <div className={`flex h-[198px] items-center justify-center rounded-[20px] border-4 border-white/60 ${getBgColorByName(name)} group-hover:border-white group-active:border-secondary transition-all`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            quality={100}
            className="object-contain"
          />
        </div>
        <div className="mt-2.5 rounded-[10px] bg-white py-2.5 text-center text-xs uppercase leading-4 tracking-widest text-primary group-hover:bg-primary/20 group-active:bg-primary group-active:text-white transition-all">
          {name}
        </div>
      </Link>
    </div>
  );
}

function getBgColorByName(name: string): string {
  let bgColor = ""
  switch (name) {
    case "Voting":
      bgColor = "bg-indigo-300"
      break;
    case "Breeds":
      bgColor = "bg-green-300"
      break;
    case "Gallery":
      bgColor = "bg-amber-200"
      break;
  }
  return bgColor
}