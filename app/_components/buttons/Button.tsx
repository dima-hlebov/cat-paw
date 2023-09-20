import { cva } from "class-variance-authority";
import { cn } from "@lib/utils";
import { ButtonProps } from "@components/buttons";

export default function Button({ onClick, variant, size, state, className, children }: ButtonProps) {
    return (
        <button onClick={onClick} className={cn(buttonVariants({ variant, size, state, className }))}>
            {children}
        </button>
    )
}

// Fix: Rework using compound variants
export const buttonVariants = cva(
    "group uppercase text-center text-xs font-normal tracking-[2px] transition-all duration-300 dark:transition-none",
    {
        variants: {
            variant: {
                primary: "border-2 border-primary bg-primary text-white",
                soft: "border-2 border-primary/0 bg-primary/20 text-primary",
                secondary: "border-2 bg-secondary border-secondary text-neutral-400",
                monochrome: "border-2 bg-white border-white text-primary dark:bg-white/5 dark:border-white/0",
                // Button group variants
                btnGroupFirst: "border-y-4 border-x-4 border-white rounded-l-sm text-white bg-green-300 hover:bg-green-300/30 hover:text-green-300",
                btnGroupMiddle: "border-y-4 border-r-4 border-white text-white bg-primary hover:bg-primary/30 hover:text-primary",
                btnGroupLast: "border-y-4 border-r-4 rounded-r-sm border-white text-white bg-amber-200 hover:bg-amber-200/30 hover:text-amber-200",
            },
            state: {
                isHoverable: "",
                isActive: "",
                isDisabled: ""
            },
            size: {
                default: "px-[28px] py-sm rounded-sm",
                sm: "p-[8px] rounded-sm",
                md: "p-[13px] rounded-md",
                groupSize: "p-[15.5px] sm:p-[21px]"
            },
        },
        defaultVariants: {
            variant: "monochrome",
            size: "default",
            state: "isHoverable"
        },
        compoundVariants: [
            { variant: ["monochrome", "primary"], state: "isActive", className: "hover:bg-primary/20 hover:border-primary/0 hover:text-primary active:bg-primary active:text-white group-hover:bg-primary/20 group-hover:border-primary/0 group-hover:text-primary group-active:bg-primary group-active:text-white" },
            { variant: ["monochrome", "primary"], state: "isHoverable", className: "hover:bg-primary hover:border-primary hover:text-white hover:bg-primary hover:border-primary hover:text-white" },
            { variant: ["soft"], state: "isActive", className: "hover:text-white hover:bg-primary active:text-primary active:bg-primary/20" },
            { variant: ["soft"], state: "isHoverable", className: "hover:text-white hover:bg-primary" },
            { variant: ["secondary"], state: "isHoverable", className: "hover:border-primary/20 hover:text-primary" },
            { variant: ["monochrome", "primary", "secondary", "soft"], state: "isDisabled", className: "" },
        ]
    }
)