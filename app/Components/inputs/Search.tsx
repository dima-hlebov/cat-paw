import Button from "../buttons/Button";
import IconWrapper from "../icons/IconWrapper";
import SearchSvg from "../icons/SearchSvg";

export default function Search({ placeholder, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <form className="w-[395px]">
            <div className="group flex justify-between items-center p-[8px] bg-white rounded-[20px] border-2 border-white hover:border-2 hover:border-primary/20 focus-within:border-primary active:border-primary transition-all ">
                <div className="w-full pl-[10px]">
                    <input className="w-full outline-none text-xl" placeholder={placeholder ? placeholder : "Search"} {...props} />
                </div>
                <div className="pl-[10px]">
                    <Button variant={"disabled"} size={"sm"}>
                        <IconWrapper Icon={SearchSvg} />
                    </Button>
                </div>
            </div>
        </form>
    )
}
