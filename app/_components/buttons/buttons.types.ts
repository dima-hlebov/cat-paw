import { buttonVariants } from "@components/buttons/Button";
import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { LinkProps as NextLinkProps } from "next/link";
import { ImageProps } from "next/image";
import { VariantProps } from "class-variance-authority";

// Types for links and buttons

export type LinkProps = {
    className?: string;
    children?: ReactNode
} & NextLinkProps

export type ImageLinkPropss = LinkProps & {
    name: string;
    image: ImageProps;
};

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

export type ButtonGroupProps = {
    children: ReactNode
}