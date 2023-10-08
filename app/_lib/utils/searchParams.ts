import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ReadonlyURLSearchParams } from "next/navigation";

export type SearchParams = {
    searchParams: { [key: string]: string | string[] | undefined };
}

export function addSearchParams(
    navigation: {
        router: AppRouterInstance;
        pathname: string;
        searchParams: ReadonlyURLSearchParams;
    },
    paramNames: string[],
    paramValues: string[]
) {
    const current = new URLSearchParams(navigation.searchParams);
    current.delete("limit")
    current.delete("page")
    paramValues.forEach((paramValue, i) => {
        if (!paramValue || paramValue === "") {
            return current.delete(paramNames[i])
        }
        return current.set(paramNames[i], paramValue)
    })

    const search = current.toString();
    const query = search ? `?${search}` : "";

    navigation.router.replace(`${navigation.pathname}${query}`);
}


export function getSearchParams(searchParam: string | string[] | undefined, defaultValue: string = ""): string {
    const params: string | string[] = searchParam ?? defaultValue
    const param: string = Array.isArray(params) ? params[0] : params;
    return param
}