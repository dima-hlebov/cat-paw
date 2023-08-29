import { BtnGroupType } from "../ComponentTypes";

export default function BtnGroup({ buttons }: BtnGroupType) {

    return (
        <div className="flex w-fit">
            {buttons.map(({ icon, label }, i: number) => {
                const classes = getClasesByLabel(label);
                return (
                    <button
                        key={i}
                        className={`group grid p-[21px] border-y-4 border-white ${i === 0 ? classes[0] : i === (buttons.length - 1) ? classes[0] : classes[0]} transition-all`}
                    >
                        {icon?.Icon ? <icon.Icon className={`${classes[1]} text-white transition-all`} /> : null}
                        {icon?.IconActive ? <icon.IconActive className="hidden text-white group-active:inline" /> : null}
                    </button>
                )
            })}
        </div>
    )
}

function getClasesByLabel(label: string): String[] {
    let btnClasses = ""
    let iconClasses = ""
    switch (label) {
        case "Like":
            btnClasses = "border-x-4 rounded-l-[20px] bg-green-300 hover:bg-green-300/30"
            iconClasses = "group-hover:text-green-300"
            break;
        case "Favourite":
            btnClasses = "border-r-4 bg-primary hover:bg-primary/30"
            iconClasses = "group-hover:text-primary group-active:hidden"
            break;
        case "Dislike":
            btnClasses = "border-r-4 rounded-r-[20px] bg-amber-200 hover:bg-amber-200/30"
            iconClasses = "group-hover:text-amber-200"
            break;
    }
    return [btnClasses, iconClasses]
}