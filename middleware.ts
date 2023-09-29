import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export function middleware(req: NextRequest) {
    const response = NextResponse.next()
    if (!req.cookies.get('userId')) {
        const id: string = uuidv4()
        response.cookies.set({ name: "userId", value: id, secure: true })
    }

    return response
}