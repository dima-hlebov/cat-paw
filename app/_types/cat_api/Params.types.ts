export enum Image {
    ALL = "gif,jpg,png",
    STATIC = "jpg,png",
    ANIMATED = "gif"
}

export enum Order {
    ASC = "ASC",
    DESC = "DESC",
    RAND = "RANDOM"
}

export type HasBreeds = 1 | 0

export type Limit = 5 | 10 | 15 | 20

export function isValueInLimit(value: number): value is Limit {
    return [5, 10, 15, 20].includes(value);
}
export function isValueInOrder(value: string): value is Order {
    return ["ASC", "DESC", "RAND"].includes(value);
}
export function isValueInImage(value: string): value is Image {
    return ["gif,jpg,png", "jpg,png", "gif"].includes(value);
}
export function isValueInHasBreeds(value: number): value is HasBreeds {
    return [1, 0].includes(value);
}