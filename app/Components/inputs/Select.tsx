import { PropsWithChildren } from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/app/utils/utils";
import { SelectType } from "../ComponentTypes";

export const selectVariants = cva(
    "w-full rounded-[10px] border-2 text-base hover:border-primary/20",
    {
        variants: {
            variant: {
                default: "border-white text-stone-900",
                filter: "text-neutral-400 bg-secondary border-secondary"
            },
            size: {
                default: "py-[7px] pl-[10px] w-full"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
);

export default function Select({ name, options, children, variant, size, className, ...props }: PropsWithChildren<SelectType>) {
    return (
        <div className="flex flex-col">
            {variant === "filter" ? null : <label className="pl-[13px] text-[10px] leading-[18px] uppercase font-medium" htmlFor={name}>{name}</label>}
            <div className="flex">
                <select
                    name={name}
                    className={`${children ? "mr-[10px]" : ""} ${cn(selectVariants({ variant, size, className }))}`}
                    {...props}
                >
                    {options.map((option, i) => (
                        <option key={i}>{option}</option>
                    ))}
                </select>
                {children}
            </div>
        </div>
    )
}
