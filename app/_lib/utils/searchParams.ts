import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ReadonlyURLSearchParams } from "next/navigation";

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

    navigation.router.push(`${navigation.pathname}${query}`);
}


export function getSearchParam(searchParam: string | string[] | undefined): string | undefined {
    const param = Array.isArray(searchParam)
        ? searchParam[0]
        : searchParam;
    return param
}