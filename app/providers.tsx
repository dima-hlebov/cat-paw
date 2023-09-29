"use client"
import ReduxProvider from "@context/Provider";
import { ThemeProvider } from "next-themes";
import { randomBytes } from "crypto";
import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    // Set user id
    useEffect(() => {
        if (!localStorage.getItem("id")) {
            const id: string = randomBytes(Math.ceil(16 / 2))
                .toString('hex')
                .slice(0, 16);

            localStorage.setItem("id", id)
        }
    }, [])

    return (
        <ReduxProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
            </ThemeProvider>
        </ReduxProvider>
    )
}
