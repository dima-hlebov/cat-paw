"use client"

import { useDebounce } from "@app/_hooks";
import Button from "@components/buttons/Button";
import IconWrapper, { SearchIcon } from "@components/icons";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export type InitialData = { id: string, name: string }

type Search = {
    initialData: InitialData[]
} & React.InputHTMLAttributes<HTMLInputElement>

export function Search({ initialData, placeholder, ...props }: Search) {
    const router = useRouter()

    const [query, setQuery] = useState<string>("")
    const [filteredData, setFilteredData] = useState<InitialData[]>([])
    const debouncedQuery = useDebounce<string>(query, 500)

    useEffect(() => {
        const filtered = initialData.filter((data) => {
            return data.name.toLowerCase().includes(debouncedQuery.toLowerCase()) && debouncedQuery !== ""
        })
        setFilteredData(filtered)
    }, [debouncedQuery, initialData])

    const handleSearchSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const filtredIds = filteredData.map(data => data.id).join(",")
        if (filteredData.length) {
            router.push(`/search?q=${query}&breeds=${encodeURIComponent(filtredIds)}`)
        }
        if (!filteredData.length) {
            router.push(`/search?q=${query}`)
        }
        setQuery("")
    }

    return (
        <form onSubmit={handleSearchSumbit} className="w-full">
            <div className="relative">
                <div tabIndex={0} className={`group flex justify-between items-center p-[8px] bg-white rounded-md border-2 border-white transition-all duration-300 dark:bg-white/5 dark:border-white/0 hover:border-2 hover:border-primary/20 focus:outline-none focus:border-primary active:border-primary`}>
                    <div className="w-full pl-sm">
                        <input
                            value={query}
                            type="search"
                            name="search"
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full text-xl outline-none bg-transperent group-focus:border-primary"
                            placeholder={placeholder ? placeholder : "Search"}
                            {...props} />
                    </div>
                    <div className="pl-sm">
                        <Button variant={"soft"} state={"isHoverable"} size={"sm"} aria-label="Search">
                            <IconWrapper Icon={SearchIcon} />
                        </Button>
                    </div>
                </div>
                <ul className={`absolute mt-md px-md py-sm w-full max-h-[35vh] z-10 bg-white shadow-lg rounded-md overflow-y-auto ${filteredData.length ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300 dark:bg-dark dark:shadow-dark`}>
                    {filteredData.map((item, i) =>
                        <li
                            key={i}
                        >
                            <Link
                                onClick={(e) => setQuery("")}
                                href={`search?q=${item.name}&breeds=${item.id}`}
                                className="text-xl cursor-pointer hover:text-primary active:text-dark dark:active:text-white"
                            >
                                {item.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </form>
    )
}
