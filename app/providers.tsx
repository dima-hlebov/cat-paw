"use client"
import ReduxProvider from "@context/Provider";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
            </ThemeProvider>
        </ReduxProvider>
    )
}
