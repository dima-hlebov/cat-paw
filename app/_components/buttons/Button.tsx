import { cva } from "class-variance-authority";
import { cn } from "@util/utils";
import { ButtonType } from "@components/buttons";

export default function Button({ onClick, variant, size, className, children }: ButtonType) {
    return (
        <button onClick={onClick} className={cn(buttonVariants({ variant, size, className }))}>
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
                // Hoverable and Activable
                activableWhite: "border-2 bg-white border-white text-primary hover:bg-primary/20 hover:border-primary/0 hover:text-primary active:bg-primary active:text-white",
                activablePrimary: "border-2 bg-primary border-primary text-white hover:bg-primary/20 hover:border-primary/0 hover:text-primary active:bg-primary active:text-white",
                // Hoverable
                white: "border-2 bg-white border-white text-primary hover:bg-primary hover:border-primary hover:text-white",
                secondary: "border-2 border-secondary text-neutral-400 hover:border-primary/20 hover:text-primary",
                primaryTransp: "border-2 bg-primary/20 text-primary border-primary/0 hover:text-white hover:bg-primary",
                disabled: "border-2 bg-primary/20 text-primary border-primary/0",
                // Group Items
                groupFirst: "border-y-4 border-x-4 border-white rounded-l-[20px] text-white bg-green-300 hover:bg-green-300/30 hover:text-green-300",
                groupMiddle: "border-y-4 border-r-4 border-white text-white bg-primary hover:bg-primary/30 hover:text-primary",
                groupLast: "border-y-4 border-r-4 rounded-r-[20px] border-white text-white bg-amber-200 hover:bg-amber-200/30 hover:text-amber-200",
            },
            size: {
                default: "px-[28px] py-[10px] rounded-[10px]",
                sm: "p-[8px] rounded-[10px]",
                md: "p-[13px] rounded-[20px]",
                groupSize: "p-[23px]"
            },
        },
        defaultVariants: {
            variant: "activablePrimary",
            size: "default",
        },
    }
)