"use client"

import { Options, Select } from '@components/inputs'
import IconWrapper, { UpdateIcon } from '@components/icons'
import Button from '@components/buttons'

import { BreedName, Image, Order } from '@app/_types/cat_api'
import { addSearchParams } from '@app/_lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@app/_hooks'
import { setBreed, setLimit, setOrder, setType } from '@app/_context/features/galleryFilterSlice'
import { useEffect } from 'react'

export function GalleryFilter({ breeds }: { breeds: BreedName[] }) {
    const { breed, limit, order, type } = useAppSelector(state => state.galleryFilterReducer)
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
        const typeParam = navigation.searchParams.get("type") ?? ""
        const orderParam = navigation.searchParams.get("order") ?? ""

        dispatch(setBreed(breedParam))
        dispatch(setLimit(limitParam))
        dispatch(setType(typeParam))
        dispatch(setOrder(orderParam))
    }, [dispatch, navigation.searchParams])

    // Set options
    const orderOptions: Options = [
        { value: Order.RAND, str: "Random" },
        { value: Order.ASC, str: "Asc" },
        { value: Order.DESC, str: "Desc" },
    ]

    const typeOptions: Options = [
        { value: Image.ALL, str: "All" },
        { value: Image.STATIC, str: "Static" },
        { value: Image.ANIMATED, str: "Animated" },
    ]

    const breedsOptions: Options =
        [{ value: "all", str: "None" }]
            .concat(breeds.map(breed => { return { value: breed.id, str: breed.name } }))

    const limitOptions: Options = [
        { value: "5", str: `Limit: 5` },
        { value: "10", str: `Limit: 10` },
        { value: "15", str: `Limit: 15` },
        { value: "20", str: `Limit: 20` },
    ]
    // Handle acitons
    const handleChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        dispatchAction: typeof setBreed | typeof setLimit | typeof setOrder | typeof setType
    ) => {
        const value = e.target.value.trim()
        dispatch(dispatchAction(value))
    }
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        addSearchParams(navigation, ["type", "order", "limit", "breed"], [type, order, limit, breed])
    }

    return (
        <form
            onSubmit={onFormSubmit}
            className="grid grid-cols-2 gap-x-lg gap-y-sm"
        >
            <div>
                <Select
                    value={order}
                    onChange={(e) => handleChange(e, setOrder)}
                    name='order'
                    options={orderOptions} />
            </div>
            <div>
                <Select
                    value={type}
                    onChange={(e) => handleChange(e, setType)}
                    name='type'
                    options={typeOptions} />
            </div>
            <div>
                <Select
                    value={breed}
                    onChange={(e) => handleChange(e, setBreed)}
                    name='breed'
                    options={breedsOptions} />
            </div>
            <div>
                <Select
                    value={limit}
                    onChange={(e) => handleChange(e, setLimit)}
                    name='limit'
                    options={limitOptions}>
                    <Button size={"sm"} className="dark:bg-dark">
                        <IconWrapper Icon={UpdateIcon}></IconWrapper>
                    </Button>
                </Select>
            </div>
        </form>
    )
}
