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

export enum ContentType {
    JSON = "application/json",
    FORMDATA = "multipart/form-data",
}

type FetchParams = {
    path: string
    searchParams?: URLSearchParams
    contentType?: ContentType
}

type GetDataParams = {
    revalidate?: number
    tags?: string[]
} & FetchParams

// By default doesn't caching 
export async function getData<T>({ path, searchParams, revalidate = 0, tags, contentType = ContentType.JSON }: GetDataParams): Promise<T> {
    let apiUrl = ""
    try {
        apiUrl = `${getApiBaseUrl()}${path}${searchParams ? searchParams : ""}`
        const response = await fetch(apiUrl, {
            next: { revalidate: revalidate, tags },
            headers: {
                "x-api-key": getApiKey(),
                "Content-Type": contentType
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch ${apiUrl} (HTTP ${response.status}) ${await response.text()}`);
        }

        const data: T = await response.json();

        return data;
    } catch (error: any) {
        console.error(`Error fetching: ${error.message}`);
        throw error;
    }
}

type PostDataParams<T> = {
    body: T,
} & FetchParams

export async function postData<T, E>({ path, searchParams, body, contentType = ContentType.JSON }: PostDataParams<T>): Promise<E> {
    let apiUrl = ""
    let headers: HeadersInit = {
        "x-api-key": getApiKey(),
    }
    let newBody: BodyInit | null = null
    if (contentType === ContentType.JSON) {
        newBody = JSON.stringify(body)
        headers["Content-Type"] = ContentType.JSON
    }
    if (contentType === ContentType.FORMDATA) {
        newBody = body as FormData
    }

    try {
        apiUrl = `${getApiBaseUrl()}${path}${searchParams ? searchParams : ""}`
        const response = await fetch(apiUrl, {
            method: "POST",
            headers,
            body: newBody
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch ${apiUrl} (HTTP ${response.status}) ${await response.text()}`);
        }

        const data: E = await response.json();

        return data;
    } catch (error: any) {
        console.error(`Error fetching: ${error.message}`);
        throw error;
    }
}

export async function deleteData<T>({ path, searchParams, contentType = ContentType.JSON }: FetchParams): Promise<T> {
    let apiUrl = ""
    try {
        apiUrl = `${getApiBaseUrl()}${path}${searchParams ? searchParams : ""}`
        const response = await fetch(apiUrl, {
            method: "DELETE",
            cache: 'no-store',
            headers: {
                "x-api-key": getApiKey(),
                "Content-Type": contentType
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch ${apiUrl} (HTTP ${response.status}) ${await response.text()}`);
        }

        const data: T = await response.json();

        return data;
    } catch (error: any) {
        console.error(`Error fetching: ${error.message}`);
        throw error;
    }
}