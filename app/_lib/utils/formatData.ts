export function formatMinutes(minutes: number): string {
    const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return formattedMinutes;
}

export function getFirstSentence(text: string): string {
    const sentenceRegex = /[^.!?]*[.!?]/;
    const match = text.match(sentenceRegex);

    return match ? match[0] : '';
}

export function base64ToBlob(base64: string, contentType: string, fileName: string): Blob {
    // Convert the Base64 data to a binary string
    const binaryString = atob(base64);

    // Create an array buffer from the binary string
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }

    // Create a Blob from the array buffer
    const blob = new Blob([arrayBuffer], { type: contentType });

    // Create a File object from the Blob

    return blob
}