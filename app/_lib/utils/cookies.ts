import { NextRequest } from "next/server";

export function getUserId(req: NextRequest) {
    try {
        const userId: string | undefined = req.cookies.get("userId")?.value
        if (userId && userId !== "") {
            return userId
        } else {
            throw Error("Cookie: user id is empty!")
        }
    } catch (error: any) {
        console.error("Error adding to favourite:", error);
        throw error
    }
}