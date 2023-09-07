import { buttonVariants } from "@components/buttons/Button";
import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { LinkProps } from "next/link";
import { ImageProps } from "next/image";
import { VariantProps } from "class-variance-authority";

// Types for links and buttons

export type LinkType = {
    className?: string;
} & PropsWithChildren<LinkProps>

export type ImageLinkType = LinkType & {
    name: string;
    image: ImageProps;
};

export type ButtonType = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

export type ButtonGroupType = {
    children: ReactNode
}