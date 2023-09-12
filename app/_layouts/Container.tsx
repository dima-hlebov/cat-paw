import { cn } from "@lib/utils";
import { VariantProps, cva } from "class-variance-authority"

export const containerVariants = cva(
    "relative",
    {
        variants: {
            variant: {
                desktop: "hidden xl:block",
                mobile: "block xl:hidden"
            },
            color: {
                default: "bg-white",
                primaryTransp: "bg-primary/20"
            },
            size: {
                default: "p-md md:p-lg w-full",
            }
        },
        defaultVariants: {
            size: "default"
        }
    }
);

type ContainerProps = {
    children?: React.ReactNode
} & React.HTMLProps<HTMLDivElement> & VariantProps<typeof containerVariants>


export function Container({ children, variant, color, size, className, ...props }: ContainerProps) {
    return (
        <div className={cn(containerVariants({ variant, size, className }))} {...props}>
            <div className={`h-full rounded-md \ 
                ${color === "primaryTransp" ? "bg-primary/20" : ""}`}
            >
                {children}
            </div>
        </div>
    )
}
