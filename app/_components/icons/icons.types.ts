import { VariantProps } from "class-variance-authority"
import { iconVariants } from "@components/icons/IconWrapper"

export type SvgProps = React.SVGProps<SVGSVGElement>

export type IconProps = {
    Icon: React.FunctionComponent<SvgProps>
    SecondaryIcon?: React.FunctionComponent<SvgProps>
}

export type IconWrapperProps = & IconProps & SvgProps & VariantProps<typeof iconVariants>
