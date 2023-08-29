import { PropsWithChildren } from "react"
import { SelectType } from "../ComponentTypes"

export default function Select({ name, width, isFilter, options, children }: PropsWithChildren<SelectType>) {
    const selectType = isFilter ? "text-neutral-400 bg-secondary border-secondary" : ""
    return (
        <div className="flex flex-col">
            {isFilter ? null : <label className="pl-[13px] text-[10px] leading-[18px] uppercase font-medium" htmlFor={name}>{name}</label>}
            <div className="flex">
                <select
                    name={name}
                    className={`w-full ${children ? "mr-[10px]" : ""} py-[5.67px] pl-[10px] rounded-[10px] border-2 border-white ${selectType} hover:border-primary/20`}
                    style={{ width: width }}
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
