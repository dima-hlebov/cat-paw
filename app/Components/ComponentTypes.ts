import { StaticImageData } from "next/image";

export enum BtnEnum {
    ACTIVABLE,
    SECONDARY,
    SORTING,
    DISABLED,
    DEFAULT,
}

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
    icon?: {
        Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
        IconActive?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    }

}

export type BtnType = IconType & {
    type?: BtnEnum;
    text?: string;
}

export type ImageLinkType = ImageType & LinkType & {
    name: string;
};

export type IconLinkType = IconType & LinkType


export type BtnGroupItemType = IconType & {
    label: string;
}

export type BtnGroupType = {
    buttons: BtnGroupItemType[]
}

export type SelectType = {
    name: string;
    options: string[];
    width?: number;
    isFilter?: boolean;
}