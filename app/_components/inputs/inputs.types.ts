import { VariantProps } from "class-variance-authority";
import { selectVariants } from "@components/inputs/Select";
import { SelectHTMLAttributes } from "react";

export type SelectProps = {
    options: string[];
} & SelectHTMLAttributes<HTMLSelectElement> & VariantProps<typeof selectVariants>