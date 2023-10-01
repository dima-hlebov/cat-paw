
import { deleteFavourite } from "@services/cat_api";
import { ResponseFavorite } from "@app/_types/cat_api";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
    const path: string[] = req.nextUrl.pathname.split("/")

    const favouriteRes: ResponseFavorite = await deleteFavourite({ imageiId: path[path.length - 1] })

    return Response.json({ favouriteRes })
}