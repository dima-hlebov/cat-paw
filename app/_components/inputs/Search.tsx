import Button from "@components/buttons/Button";
import IconWrapper, { SearchIcon } from "@components/icons";

// Search component witch disabled button

export function Search({ placeholder, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <form className="w-full">
            <div className="group flex justify-between items-center p-[8px] bg-white rounded-md border-2 border-white hover:border-2 hover:border-primary/20 focus-within:border-primary active:border-primary transition-all duration-300 ">
                <div className="w-full pl-sm">
                    <input className="w-full outline-none text-2xl" placeholder={placeholder ? placeholder : "Search"} {...props} />
                </div>
                <div className="pl-sm">
                    <Button variant={"soft"} state={"isDisabled"} size={"sm"} disabled>
                        <IconWrapper Icon={SearchIcon} />
                    </Button>
                </div>
            </div>
        </form>
    )
}
