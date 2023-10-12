"use client"

import Button from "@components/buttons/Button";
import { SortIcon, SortRevertIcon } from "@components/icons";
import IconWrapper from "@components/icons";
import { Options, Select } from "@components/inputs";

import { BreedName, Order } from "@app/_types/cat_api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addSearchParams } from "@app/_lib/utils";
import { useAppDispatch, useAppSelector } from "@app/_hooks";
import { setBreed, setLimit } from "@app/_context/features/breedFilterSlice";
import { useEffect } from "react";
import { useSmoothScroll } from "@app/_hooks/animationHooks";

export function BreedFilter({ breeds }: { breeds: BreedName[] }) {
    const { breed, limit } = useAppSelector(state => state.breedFilterReducer)
    const dispatch = useAppDispatch()

    const { scrollTop } = useSmoothScroll()

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

    // Refactor breed object to options and set options
    const breedsOptions: Options =
        [{ value: "all", str: "All breeds" }]
            .concat(breeds.map(breed => { return { value: breed.id, str: breed.name } }))

    const limitOptions: Options = [
        { value: "5", str: `Limit: 5` },
        { value: "10", str: `Limit: 10` },
        { value: "15", str: `Limit: 15` },
        { value: "20", str: `Limit: 20` },
    ]

    // Handle actions
    const handleChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        dispatchAction: typeof setBreed | typeof setLimit,
        paramName: "breed" | "limit"
    ) => {
        const value = e.target.value.trim()
        addSearchParams(navigation, [paramName], [e.target.value.trim()])
        dispatch(dispatchAction(value))
        scrollTop()
    }

    const handleSortClick = (e: React.MouseEvent<HTMLButtonElement>, order: Order.ASC | Order.DESC) => {
        addSearchParams(navigation, ["order"], [order])
        scrollTop()
    }

    return (
        <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-wrap gap-sm"
        >
            <div className="grow basis-full sm:basis-auto">
                <Select
                    value={breed ? breed : ""}
                    onChange={(e) => handleChange(e, setBreed, "breed")}
                    variant={"inline"}
                    options={breedsOptions}
                />
            </div>
            <div className="flex gap-sm grow sm:grow-0">
                <div className="grow">
                    <Select
                        value={limit ? limit : ""}
                        onChange={(e) => handleChange(e, setLimit, "limit")}
                        variant={"inline"}
                        options={limitOptions} />
                </div>
                <Button
                    onClick={(e) => handleSortClick(e, Order.ASC)}
                    variant={"secondary"}
                    state={"isHoverable"} size={"sm"}
                    aria-label="Order ascending">
                    <IconWrapper Icon={SortIcon} />
                </Button>
                <Button
                    onClick={(e) => handleSortClick(e, Order.DESC)}
                    variant={"secondary"}
                    state={"isHoverable"}
                    size={"sm"}
                    aria-label="Order descending">
                    <IconWrapper Icon={SortRevertIcon} />
                </Button>
            </div>
        </form>
    )
}
