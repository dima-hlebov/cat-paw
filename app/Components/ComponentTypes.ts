import { StaticImageData } from "next/image";

export type InputType = {
    placeHolder?: string
}

export type LinkType = {
    href: string;
}

export type ImageType = {
    image: {
        src: StaticImageData;
        alt: string;
        width?: number;
        height?: number;
    };
}

export type IconType = {
    Icon: {
        Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
        IconActive?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    }

}

export type IconBtnType = IconType & {
    isActive?: boolean;
    isHoverable?: boolean;
    isSecondary?: boolean;
    isAbsolute?: boolean;
}

export type ImageLinkType = ImageType & LinkType

export type IconLinkType = IconType & LinkType

export type ImageBtnLinkType = ImageLinkType & {
    name: string;
};

export type BtnGroupItemType = IconType & {
    label: string;
}

export type BtnGroupType = {
    buttons: BtnGroupItemType[]
}
