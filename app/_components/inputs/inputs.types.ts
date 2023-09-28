import { VariantProps } from "class-variance-authority";
import { selectVariants } from "@components/inputs/Select";
import { SelectHTMLAttributes } from "react";

export type Options = {
    value: string
    str: string
    isSelected?: boolean
}[]

export type SelectProps = {
    options: Options
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
} & SelectHTMLAttributes<HTMLSelectElement> & VariantProps<typeof selectVariants>