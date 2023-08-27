import { IconBtnType } from "./ComponentTypes";

export default function IconBtn({ isActive, isHoverable, isSecondary, Icon: { Icon, IconActive } }: IconBtnType) {
    return (
        <div className="group w-fit">
            <button className={`flex justify-center items-center w-full h-full p-[10px] rounded-[10px] ${isSecondary ? "bg-primary/20" : "bg-white"} ${isHoverable ? "group-hover:bg-primary" : ""} transition-all`}>
                <Icon className={`text-primary ${isHoverable ? "group-hover:text-white" : ""}  transition-all`} />
                {IconActive && isActive ? <IconActive className="hidden" /> : null}
            </button>
        </div>
    )
}
