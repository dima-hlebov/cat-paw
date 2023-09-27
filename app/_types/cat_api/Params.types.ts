export enum Image {
    ALL = "",
    STATIC = "jpg,png",
    ANIMATED = "gif"
}

export enum Order {
    ASC = "ASC",
    DESC = "DESC",
    RAND = "RAND"
}

export type Limit = 5 | 10 | 15 | 20

export function isValueInLimit(value: number): value is Limit {
    return [5, 10, 15, 20].includes(value);
}
export function isValueInOrder(value: string): value is Order {
    return ["ASC", "DESC", "RAND"].includes(value);
}
export function isValueInImage(value: string): value is Image {
    return ["", "jpg,png", "gif"].includes(value);
}