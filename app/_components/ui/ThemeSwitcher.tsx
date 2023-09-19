"use client"

import { Switch } from "@components/inputs";
import IconWrapper, { OpenedEyeIcon } from "@components/icons";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const onChangeHandler = () => {
        switch (theme) {
            case "light":
                setTheme("dark")
                break;
            case "dark":
                setTheme("light")
                break;
        }
        console.log(theme)
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="flex gap-xs">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-[50px]">
                <IconWrapper Icon={OpenedEyeIcon} className="text-primary" />
            </div>
            <Switch onChange={onChangeHandler} />
        </div>
    )
}
