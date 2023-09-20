import { cn } from "@lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import IconWrapper from "../icons/IconWrapper"
import { ErrorIcon, SuccesIcon } from "@components/icons"

type AlertProps = {
    text: string
} & React.HTMLProps<HTMLDivElement> & VariantProps<typeof alertVariants>

export default function Alert({ text, variant, color, className }: AlertProps) {
    return (
        <div className={cn(alertVariants({ variant, color, className }))}>
            <div className="flex items-center gap-sm">{variant && getVariantIcon(variant)} {text}</div>
        </div>
    )
}

export const alertVariants = cva(
    "p-md rounded-sm",
    {
        variants: {
            variant: {
                info: "",
                succes: "",
                destructive: "",
            },
            color: {
                monochrome: "bg-white dark:bg-white/5",
                secondary: "bg-secondary dark:bg-white/5",
            }
        },
        defaultVariants: {
            variant: "info",
            color: "secondary",
        }
    }
)

function getVariantIcon(variant: string) {
    switch (variant) {
        case "succes":
            return <IconWrapper Icon={SuccesIcon} />
        case "destructive":
            return <IconWrapper Icon={ErrorIcon} />
        default:
            return null
    }
}