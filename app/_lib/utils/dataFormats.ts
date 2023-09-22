export function formatMinutes(minutes: number): string {
    const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return formattedMinutes;
}