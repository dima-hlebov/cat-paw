export function formatTime(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Add leading zeros if hours or minutes are less than 10
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
}

export function getFirstSentence(text: string): string {
    const sentenceRegex = /[^.!?]*[.!?]/;
    const match = text.match(sentenceRegex);

    return match ? match[0] : '';
}

import { Limit } from "@app/_types/cat_api";

export function paginate<T>(currentPage: number, limit: Limit, arr: T[]): T[][] {
    const startIndex = currentPage * limit;
    const endIndex = startIndex + limit;

    const nextStartIndex = (currentPage + 1) * limit;
    const nextEndIndex = nextStartIndex + limit;

    return [arr.slice(startIndex, endIndex), arr.slice(nextStartIndex, nextEndIndex),];
}