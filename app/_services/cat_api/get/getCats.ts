"use server"

import { Cat, HasBreeds, Image, Limit, Order, isValueInHasBreeds, isValueInImage, isValueInLimit, isValueInOrder } from "@app/_types/cat_api"
import { getData } from "@lib/utils"
import { breedIdPattern, defaultBreed, defaultHasBreeds, defaultLimit } from "@services/cat_api"

import { cookies } from "next/headers"

export type GetCatsArgs = {
    limit?: Limit
    order?: Order
    breed?: string
    type?: Image
    has_breeds?: HasBreeds
}

export async function getCats({ breed, limit, order, has_breeds, type = Image.ALL }: GetCatsArgs): Promise<Cat[]> {
    // Validate input and Initialize URLSearchParams
    const searchParams = new URLSearchParams()
    const userId = cookies().get("userId")
    if (userId) {
        searchParams.append("sub_ids", userId.value)
    }
    if (breed && breed !== defaultBreed && breedIdPattern.test(breed)) {
        searchParams.append("breed_ids", breed.toString())
    }
    if (order) {
        if (!isValueInOrder(order)) order = Order.ASC
        searchParams.append("order", order)
    }
    if (limit) {
        if (!isValueInLimit(limit)) limit = defaultLimit
        searchParams.append("limit", limit.toString())
    }
    if (has_breeds) {
        if (!isValueInHasBreeds(has_breeds)) has_breeds = defaultHasBreeds
        searchParams.append("has_breeds", has_breeds.toString())
    }
    if (isValueInImage(type)) {
        searchParams.append("mime_types", type)
    }
    console.log(searchParams)
    try {
        const cats: Cat[] = await getData<Cat[]>({ path: "/images/search?", searchParams, revalidate: 60 * 60 * 24 * 7 })
        return cats
    } catch (error: any) {
        console.error("Error fetching cats:", error);
        throw error;
    }
}

