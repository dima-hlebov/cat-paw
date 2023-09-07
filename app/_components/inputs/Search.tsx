import Button from "@components/buttons/Button";
import IconWrapper, { SearchIcon } from "@components/icons";

// Search component witch disabled button

export function Search({ placeholder, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <form className="w-full">
            <div className="group flex justify-between items-center p-[8px] bg-white rounded-[20px] border-2 border-white hover:border-2 hover:border-primary/20 focus-within:border-primary active:border-primary transition-all ">
                <div className="w-full pl-[10px]">
                    <input className="w-full outline-none text-xl" placeholder={placeholder ? placeholder : "Search"} {...props} />
                </div>
                <div className="pl-[10px]">
                    <Button variant={"disabled"} size={"sm"} disabled>
                        <IconWrapper Icon={SearchIcon} />
                    </Button>
                </div>
            </div>
        </form>
    )
}
