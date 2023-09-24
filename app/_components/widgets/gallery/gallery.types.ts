import { SvgProps } from "@components/icons";
import { ImageProps } from "next/image";
import { LinkProps } from "next/link";

export enum ItemLayout {
    COLS_1_ROWS_2 = "sm:aspect-[2/3] sm:row-span-2",
    COLS_2_ROWS_2 = "sm:aspect-[7/5] sm:col-span-2 sm:row-span-2",
    COLS_1_ROWS_1 = "sm:aspect-[10/7]"
}

export type GalleryItemProps = {
    image: ImageProps;
    itemLayout: ItemLayout;
    children?: React.ReactNode
}

export type GalleryItemLinkProps = {
    link: LinkProps
} & GalleryItemProps


export type GalleryItemButtonProps = {
    icon: React.FunctionComponent<SvgProps>
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
} & GalleryItemProps