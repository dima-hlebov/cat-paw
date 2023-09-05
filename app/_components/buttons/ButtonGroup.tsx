import { ButtonGroupType } from "@components/buttons/buttons.types";

export function ButtonGroup({ children }: ButtonGroupType) {
    return (
        <div className="flex">
            {children}
        </div>
    )
}