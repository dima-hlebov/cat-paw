import IconBtn from "./IconBtn"
import UpdateSvg20 from "./icons/UpdateSvg20"

export type SelectType = {
    name: string;
    options: string[];
    width?: number;
    hasIconBtn?: boolean;
    isFilter?: boolean;
}

export default function Select({ name, width, hasIconBtn, isFilter, options }: SelectType) {
    const selectType = isFilter ? "text-neutral-400 bg-secondary" : ""
    return (
        <div className="flex flex-col">
            <label className="pl-[13px] text-[10px] leading-[18px] uppercase font-medium" htmlFor={name}>{name}</label>
            <div className="flex">
                <select
                    name={name}
                    className={`w-full py-[7.5px] pl-[10px] rounded-[10px] ${selectType}`}
                    style={{ width: width }}
                >
                    {options.map((option, i) => (
                        <option key={i}>{option}</option>
                    ))}
                </select>
                {hasIconBtn ? <IconBtn Icon={{ Icon: UpdateSvg20 }} /> : null}
            </div>
        </div>
    )
}
