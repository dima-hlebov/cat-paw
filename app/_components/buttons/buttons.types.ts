import { buttonVariants } from "@components/buttons/Button";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { LinkProps as NextLinkProps } from "next/link";
import { ImageProps } from "next/image";
import { VariantProps } from "class-variance-authority";
import { OnClick } from "@app/_types/components";

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
    onClick?: OnClick<HTMLButtonElement>
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

export type ButtonGroupProps = {
    children: ReactNode
}