import { cva } from "class-variance-authority";
import { cn } from "@util/utils";
import { ButtonType } from "@components/buttons";

export default function Button({ onClick, variant, size, state, className, children }: ButtonType) {
    return (
        <button onClick={onClick} className={cn(buttonVariants({ variant, size, state, className }))}>
            {children}
        </button>
    )
}

// Fix: Rework using compound variants
export const buttonVariants = cva(
    "group uppercase text-center text-xs font-normal tracking-[2px] transition-all",
    {
        variants: {
            variant: {
                primary: "border-2 border-primary bg-primary text-white",
                soft: "border-2 border-primary/0 bg-primary/20 text-primary",
                secondary: "border-2 border-secondary text-neutral-400",
                monochrome: "border-2 bg-white border-white text-primary",
                // Button group variants
                btnGroupFirst: "border-y-4 border-x-4 border-white rounded-l-[20px] text-white bg-green-300 hover:bg-green-300/30 hover:text-green-300",
                btnGroupMiddle: "border-y-4 border-r-4 border-white text-white bg-primary hover:bg-primary/30 hover:text-primary",
                btnGroupLast: "border-y-4 border-r-4 rounded-r-[20px] border-white text-white bg-amber-200 hover:bg-amber-200/30 hover:text-amber-200",
            },
            state: {
                isHoverable: "",
                isActive: "",
                isDisabled: ""
            },
            size: {
                default: "px-[28px] py-[10px] rounded-[10px]",
                sm: "p-[8px] rounded-[10px]",
                md: "p-[13px] rounded-[20px]",
                groupSize: "p-[23px]"
            },
        },
        defaultVariants: {
            size: "default",
            state: "isHoverable"
        },
        compoundVariants: [
            { variant: ["monochrome", "primary"], state: "isActive", className: "hover:bg-primary/20 hover:border-primary/0 hover:text-primary active:bg-primary active:text-white" },
            { variant: ["monochrome", "primary"], state: "isHoverable", className: "hover:bg-primary hover:border-primary hover:text-white" },
            { variant: ["soft"], state: "isHoverable", className: "hover:text-white hover:bg-primary" },
            { variant: ["secondary"], state: "isHoverable", className: "hover:border-primary/20 hover:text-primary" },
            { variant: ["monochrome", "primary", "secondary", "soft"], state: "isDisabled", className: "" },
        ]
    }
)