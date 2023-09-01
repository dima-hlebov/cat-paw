import { ButtonGroupType } from "../ComponentTypes";
import { ReactNode } from "react";

export default function ButtonGroup({ children }: ButtonGroupType) {

    return (
        <div className="flex">
            {children}
        </div>
    )
}