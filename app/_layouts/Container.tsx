import { cn } from "@lib/utils/cn";
import { VariantProps, cva } from "class-variance-authority"

export const containerVariants = cva(
    "max-w-[1080px] mx-auto xl:mx-0",
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
            <div className={`rounded-md`}>
                {children}
            </div>
        </div>
    )
}
