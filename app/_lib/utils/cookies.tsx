"use server"

import { randomBytes } from "crypto";
import { cookies } from "next/headers";

export async function getUserId() {
    if (!cookies().has("id")) {
        const id: string = randomBytes(Math.ceil(16 / 2))
            .toString('hex')
            .slice(0, 16);

        cookies().set("id", id, { secure: true })
    }

    return cookies().get("id")
}