"use client"

import { setQuery } from "@app/_context/features/searchSlice";
import { useAppDispatch, useAppSelector } from "@app/_hooks";
import Button from "@components/buttons/Button";
import IconWrapper, { SearchIcon } from "@components/icons";
import { useRouter } from 'next/navigation';

export function Search({ placeholder, onSubmit, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    const router = useRouter()

    const dispatch = useAppDispatch()

    let inputValue = ""

    const handleChangeSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputValue = e.target.value
    }

    const handleFormSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setQuery(inputValue))
        router.push(`/search`)
    }

    return (
        <form onSubmit={handleFormSumbit} className="w-full">
            <div className="group flex justify-between items-center p-[8px] bg-white rounded-md border-2 border-white transition-all duration-300 dark:bg-white/5 dark:border-white/0 hover:border-2 hover:border-primary/20 focus-within:border-primary active:border-primary">
                <div className="w-full pl-sm">
                    <input
                        name="search"
                        onChange={handleChangeSubmit}
                        className="w-full text-xl outline-none bg-transperent"
                        placeholder={placeholder ? placeholder : "Search"}
                        {...props} />
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
