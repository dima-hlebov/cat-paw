import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatMinutes(minutes: number): string {
    const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return formattedMinutes;
}