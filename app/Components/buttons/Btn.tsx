import { BtnType, BtnEnum } from "../ComponentTypes";

export default function Btn({ type = BtnEnum.DEFAULT, text, icon }: BtnType) {
    const classes = getClassesByType(type)
    return (
        <div className="group w-fit h-fit ">
            <button className={`p-[8px] rounded-[10px] border-2 uppercase text-xs font-medium tracking-[2px] transition-all ${classes[0]}`}>
                {icon?.Icon ? <icon.Icon className={`inline transition-all ${classes[1]}`} /> : null}
                {icon?.IconActive ? <icon.IconActive className="hidden group-active:inline" /> : null}
                {text && text}
            </button>
        </div >
    )
}

function getClassesByType(type: BtnEnum): String[] {
    let buttonClasses: string = ""
    let iconClasses: string = ""
    switch (type) {
        case BtnEnum.ACTIVABLE:
            buttonClasses = "px-[30px] py-[10px] bg-primary text-white group-hover:bg-primary/20 group-hover:text-primary group-active:bg-primary group-active:text-white";
            iconClasses = "text-white group-hover:text-primary group-active:text-white";
            break;
        case BtnEnum.SORTING:
            buttonClasses = "text-white group-hover:text-primary group-active:text-white";
            iconClasses = "text-neutral-400 group-hover:text-primary";
            break;
        case BtnEnum.SECONDARY:
            buttonClasses = "bg-primary/20 border-primary/0 group-hover:text-white group-hover:bg-primary";
            iconClasses = "text-primary group-hover:text-white";
            break;
        case BtnEnum.DISABLED:
            buttonClasses = "bg-primary/20 border-primary/0";
            iconClasses = "text-primary";
            break;
        case BtnEnum.DEFAULT:
            buttonClasses = "bg-white border-white text-primary group-hover:bg-primary group-hover:text-white";
            iconClasses = "text-primary group-hover:text-white";
            break;
    }
    return [buttonClasses, iconClasses]
}