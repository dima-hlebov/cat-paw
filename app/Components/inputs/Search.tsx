import { InputType } from "../ComponentTypes";
import Btn from "../buttons/Btn";
import SearchSvg20 from "../icons/SearchSvg20";

export default function Search({ placeHolder }: InputType) {
    return (
        <form className="w-[395px]">
            <div className="flex justify-between items-center p-[8px] bg-white rounded-[20px] border-2 border-white hover:border-2 hover:border-primary/20 active:border-primary transition-all">
                <div className="w-full pl-[10px]">
                    <input className="w-full outline-none text-xl" placeholder={placeHolder ? placeHolder : "Search"} />
                </div>
                <div className="pl-[10px]">
                    <Btn icon={{ Icon: SearchSvg20 }} />
                </div>
            </div>
        </form>
    )
}
