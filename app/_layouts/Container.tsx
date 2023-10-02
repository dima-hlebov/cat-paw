import { cn } from "@lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority"

export const containerVariants = cva(
    "h-full max-w-[1080px] mx-auto xl:mx-0",
    {
        variants: {
            variant: {
                desktop: "hidden xl:block",
                mobile: "block xl:hidden"
            },
            size_: {
                default: "p-md w-full md:p-lg",
                modal: "w-full sm:p-lg"
            }
        },
        defaultVariants: {
            size_: "default"
        }
    }
);

type ContainerProps = {
    children?: React.ReactNode
} & React.HTMLProps<HTMLDivElement> & VariantProps<typeof containerVariants>


export function Container({ children, variant, size_, className, ...props }: ContainerProps) {
    return (
        <div className={cn(containerVariants({ variant, size_, className }))} {...props}>
            {children}
        </div>
    )
}
