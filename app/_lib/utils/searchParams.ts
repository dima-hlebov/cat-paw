import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ReadonlyURLSearchParams } from "next/navigation";

export type SearchParams = {
    searchParams: { [key: string]: string | string[] | undefined };
}

export function addSearchParam(
    navigation: {
        router: AppRouterInstance;
        pathname: string;
        searchParams: ReadonlyURLSearchParams;
    },
    paramName: string,
    paramValue: string
) {
    const current = new URLSearchParams(navigation.searchParams);

    if (!paramValue) {
        current.delete(paramName);
    } else {
        current.set(paramName, paramValue);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    navigation.router.replace(`${navigation.pathname}${query}`);
}


export function getSearchParam(searchParam: string | string[] | undefined, defaultValue: string = ""): string {
    const params: string | string[] = searchParam ?? defaultValue
    const param: string = Array.isArray(params) ? params[0] : params;
    return param
}