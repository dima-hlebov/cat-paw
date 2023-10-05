export enum LogAction {
    LIKE,
    DISLIKE,
    FAVOURITE,
    UNFAVOURITE,
}

export type Log = {
    message: string
    timestamp: string
    action: LogAction
}