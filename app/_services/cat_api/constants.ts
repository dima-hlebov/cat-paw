import { Order } from "@app/_types/cat_api"

export const defaultBreed = "all"

export const defaultLimit = 10
export const maxLimit = 20

export const defaultOrder = Order.ASC

export const defaultHasBreeds = 1

export const breedIdPattern = /^[A-Za-z]{4}$/