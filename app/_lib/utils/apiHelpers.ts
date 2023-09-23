export function getApiBaseUrl(): string {
    const apiBaseUrl = process.env.API_BASE_URL;

    if (!apiBaseUrl) {
        throw new Error("API_BASE_URL is not defined in environment variables");
    }

    return apiBaseUrl;
}

export function getApiKey(): string {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        throw new Error("API_BASE_URL is not defined in environment variables");
    }

    return apiKey;
}

type GetDataParams = {
    path: string
    searchParams?: URLSearchParams
    revalidate?: number
}

// By default doesn't caching 
export async function getData<T>({ path, searchParams, revalidate = 0 }: GetDataParams): Promise<T> {
    let apiUrl = ""
    try {
        apiUrl = `${getApiBaseUrl()}${path}${searchParams ? searchParams : ""}`
        const response = await fetch(apiUrl, {
            next: { revalidate: revalidate },
            headers: {
                "x-api-key": getApiKey()
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch ${apiUrl} (HTTP ${response.status})`);
        }

        const data: T = await response.json();

        return data;
    } catch (error: any) {
        console.error(`Error fetching: ${error.message}`);
        throw error;
    }
}