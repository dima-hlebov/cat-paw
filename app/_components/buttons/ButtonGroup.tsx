import { ButtonGroupProps } from "@components/buttons/buttons.types";

export function ButtonGroup({ children }: ButtonGroupProps) {
    return (
        <div className="flex">
            {children}
        </div>
    )
}