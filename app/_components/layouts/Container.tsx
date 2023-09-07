import { cn } from "@util/utils";
import { VariantProps, cva } from "class-variance-authority"

export const containerVariants = cva(
    "",
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
                default: "p-[20px] md:p-[30px] w-full",
            }
        },
        defaultVariants: {
            size: "default"
        }
    }
);

type ContainerTypes = {
    children?: React.ReactNode
} & React.HTMLProps<HTMLDivElement> & VariantProps<typeof containerVariants>


export function Container({ children, variant, color, size, className, ...props }: ContainerTypes) {
    return (
        <div className={cn(containerVariants({ variant, size, className }))} {...props}>
            <div className={`h-full rounded-[20px] \ 
                ${color === "primaryTransp" ? "bg-primary/20" : ""}`}
            >
                {children}
                <div></div>
            </div>
        </div>
    )
}
