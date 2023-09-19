import { cn } from "@lib/utils";
import { VariantProps, cva } from "class-variance-authority"

export const containerVariants = cva(
    "min-h-screen max-w-[1280px]",
    {
        variants: {
            variant: {
                desktop: "hidden xl:block",
                mobile: "block xl:hidden"
            },
            size_: {
                default: "p-md md:p-lg w-full",
                modal: "sm:p-lg w-full"
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
            <div className={`h-full rounded-md`}>
                {children}
            </div>
        </div>
    )
}
