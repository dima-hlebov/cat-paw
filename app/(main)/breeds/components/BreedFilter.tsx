"use client"

import Form from "@components/forms/Form";
import Button from "@components/buttons/Button";
import { SortIcon, SortRevertIcon } from "@components/icons";
import IconWrapper from "@components/icons";
import { Options, Select } from "@components/inputs";

import { BreedName, Order } from "@app/_types/cat_api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { addSearchParam } from "@app/_lib/utils";
import { useAppDispatch, useAppSelector } from "@app/_hooks";
import { setSelectedBreed, setSelectedLimit } from "@app/_context/features/breedFilterSlice";
import { useEffect } from "react";

export function BreedFilter({ breeds }: { breeds: BreedName[] }) {
    const { selectedBreed, selectedLimit } = useAppSelector(state => state.breedFilterReducer)
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

        dispatch(setSelectedBreed(breedParam))
        dispatch(setSelectedLimit(limitParam))
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
        dispatch(setSelectedBreed(value))
    }

    const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value.trim()
        addSearchParam(navigation, "limit", e.target.value.trim())
        dispatch(setSelectedLimit(value))
    }

    const handleSortClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        addSearchParam(navigation, "order", Order.ASC)
    }

    const handleSortRevertClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        addSearchParam(navigation, "order", Order.DESC)
    }

    return (
        <Form
            className="flex flex-wrap gap-sm"
        >
            <div className="grow basis-full sm:basis-auto">
                <Select
                    value={selectedBreed ? selectedBreed : ""}
                    onChange={handleBreedChange}
                    variant={"inline"}
                    options={breedsOptions}
                />
            </div>
            <div className="flex gap-sm grow sm:grow-0">
                <div className="grow">
                    <Select
                        value={selectedLimit ? selectedLimit : ""}
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
        </Form>
    )
}
