import { PropsWithChildren } from "react"
import { cva } from "class-variance-authority"
import { cn } from "@util/utils";
import { SelectType } from "@components/inputs";

export const selectVariants = cva(
    "w-full rounded-[10px] border-2 text-base hover:border-primary/20",
    {
        variants: {
            variant: {
                default: "border-white text-accent",
                filter: "text-neutral-400 bg-secondary border-secondary"
            },
            size: {
                default: "py-[7px] px-[10px]"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
);

// For ex.: refresh button could be added as a children

export function Select({ name, options, children, variant, size, className, ...props }: PropsWithChildren<SelectType>) {
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