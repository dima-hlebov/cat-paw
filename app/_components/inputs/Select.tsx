"use client"

import { PropsWithChildren } from "react"
import { cva } from "class-variance-authority"
import { cn } from "@lib/utils/cn";
import { SelectProps } from "@components/inputs";

export const selectVariants = cva(
    "w-full max-h-[40px] rounded-sm border-2 hover:border-primary/20 dark:hover:border-primary/20",
    {
        variants: {
            variant: {
                default: "bg-white border-white text-dark dark:bg-dark dark:border-dark dark:text-white",
                inline: "text-light-dark bg-secondary border-secondary dark:bg-white/5 dark:border-white/0"
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

export function Select({ value, name, options, variant, size, className, ...props }: SelectProps) {
    return (
        <div className="flex flex-col">
            {variant === "inline" ? null : <label className="pl-[13px] text-sm uppercase font-medium" htmlFor={name}>{name}</label>}
            <select
                value={value}
                id={name}
                name={name}
                className={cn(selectVariants({ variant, size, className }))}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.str}</option>
                ))}
            </select>
        </div>
    )
}