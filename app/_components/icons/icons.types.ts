import { VariantProps } from "class-variance-authority"
import { SVGProps } from "react"
import { iconVariants } from "@components/icons/IconWrapper"

export type SvgProps = React.SVGProps<SVGSVGElement>

export type IconProps = {
    Icon: React.FunctionComponent<SvgProps>
    SecondaryIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export type IconWrapperProps = & IconProps & SVGProps<SVGSVGElement> & VariantProps<typeof iconVariants>
