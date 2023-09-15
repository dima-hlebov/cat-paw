import { PropsWithChildren } from "react"
import { cva } from "class-variance-authority"
import { cn } from "@lib/utils";
import { SelectProps } from "@components/inputs";

export const selectVariants = cva(
    "w-full max-h-[40px] rounded-sm border-2 hover:border-primary/20",
    {
        variants: {
            variant: {
                default: "border-white text-dark",
                sorting: "text-light-dark bg-secondary border-secondary"
            },
            size: {
                default: "py-[7px] px-sm"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
);

export function Select({ name, options, children, variant, size, className, ...props }: PropsWithChildren<SelectProps>) {
    return (
        <div className="flex flex-col">
            {variant === "sorting" ? null : <label className="pl-[13px] text-sm uppercase font-medium" htmlFor={name}>{name}</label>}
            <div className="flex">
                <select
                    name={name}
                    className={`${children ? "mr-sm" : ""} ${cn(selectVariants({ variant, size, className }))}`}
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
