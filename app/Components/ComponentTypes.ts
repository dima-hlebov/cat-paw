import { ImageProps } from "next/image";
import { iconVariants } from "./icons/IconWrapper";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttons/Button";
import { ButtonHTMLAttributes, PropsWithChildren, ReactNode, SVGProps, SelectHTMLAttributes } from "react";
import { LinkProps } from "next/link";
import { selectVariants } from "./inputs/Select";

export type LinkType = {
    className?: string;
} & PropsWithChildren<LinkProps>

export type ImageLinkType = LinkType & {
    name: string;
    image: ImageProps;
};

export type IconType = {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    SecondaryIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export type IconWrapperType = & IconType & SVGProps<SVGSVGElement> & VariantProps<typeof iconVariants>

export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

export type ButtonGroupType = {
    children: ReactNode
}

export type SelectType = {
    options: string[];
} & SelectHTMLAttributes<HTMLSelectElement> & VariantProps<typeof selectVariants>