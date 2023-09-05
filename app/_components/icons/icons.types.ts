import { VariantProps } from "class-variance-authority"
import { SVGProps } from "react"
import { iconVariants } from "@components/icons/IconWrapper"

export type IconType = {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    SecondaryIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export type IconWrapperType = & IconType & SVGProps<SVGSVGElement> & VariantProps<typeof iconVariants>
