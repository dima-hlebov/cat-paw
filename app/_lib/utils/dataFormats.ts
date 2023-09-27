export function formatMinutes(minutes: number): string {
    const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return formattedMinutes;
}

export function getFirstSentence(text: string): string {
    const sentenceRegex = /[^.!?]*[.!?]/;
    const match = text.match(sentenceRegex);

    return match ? match[0] : '';
}