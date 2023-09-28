"use client"

import Button from "@components/buttons/Button";
import { SortIcon, SortRevertIcon } from "@components/icons";
import IconWrapper from "@components/icons";
import { Options, Select } from "@components/inputs";

import { BreedName, Order } from "@app/_types/cat_api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addSearchParam } from "@app/_lib/utils";
import { useAppDispatch, useAppSelector } from "@app/_hooks";
import { setBreed, setLimit } from "@app/_context/features/breedFilterSlice";
import { useEffect } from "react";

export function BreedFilter({ breeds }: { breeds: BreedName[] }) {
    const { breed, limit } = useAppSelector(state => state.breedFilterReducer)
    const dispatch = useAppDispatch()

    const navigation = {
        router: useRouter(),
        pathname: usePathname(),
        searchParams: useSearchParams()
    }

    // Get initial params
    useEffect(() => {
        const breedParam = navigation.searchParams.get("breed") ?? ""
        const limitParam = navigation.searchParams.get("limit") ?? ""

        dispatch(setBreed(breedParam))
        dispatch(setLimit(limitParam))
    }, [dispatch, navigation.searchParams])

    // Refactor breed object to options
    const breedsOptions: Options =
        [{ value: "all", str: "All breeds" }]
            .concat(breeds.map(breed => { return { value: breed.id, str: breed.name } }))

    const limitOptions: Options = [
        { value: "5", str: `Limit: 5` },
        { value: "10", str: `Limit: 10` },
        { value: "15", str: `Limit: 15` },
        { value: "20", str: `Limit: 20` },
    ]

    // Handle filters
    const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value.trim()
        addSearchParam(navigation, "breed", e.target.value.trim())
        dispatch(setBreed(value))
    }

    const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value.trim()
        addSearchParam(navigation, "limit", e.target.value.trim())
        dispatch(setLimit(value))
    }

    const handleSortClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        addSearchParam(navigation, "order", Order.ASC)
    }

    const handleSortRevertClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        addSearchParam(navigation, "order", Order.DESC)
    }

    return (
        <form
            className="flex flex-wrap gap-sm"
        >
            <div className="grow basis-full sm:basis-auto">
                <Select
                    value={breed ? breed : ""}
                    onChange={handleBreedChange}
                    variant={"inline"}
                    options={breedsOptions}
                />
            </div>
            <div className="flex gap-sm grow sm:grow-0">
                <div className="grow">
                    <Select
                        value={limit ? limit : ""}
                        onChange={handleLimitChange}
                        variant={"inline"}
                        options={limitOptions} />
                </div>
                <Button onClick={handleSortClick} variant={"secondary"} state={"isHoverable"} size={"sm"}>
                    <IconWrapper Icon={SortIcon} />
                </Button>
                <Button onClick={handleSortRevertClick} variant={"secondary"} state={"isHoverable"} size={"sm"}>
                    <IconWrapper Icon={SortRevertIcon} />
                </Button>
            </div>
        </form>
    )
}
