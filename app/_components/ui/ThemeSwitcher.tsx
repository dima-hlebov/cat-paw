"use client"

import { Switch } from "@components/inputs";
import IconWrapper, { ClosedEyeIcon, OpenedEyeIcon } from "@components/icons";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

enum Theme {
    LIGHT = "light",
    DARK = "dark"
}

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const onChangeHandler = () => {
        switch (theme) {
            case Theme.LIGHT:
                setTheme(Theme.DARK)
                break;
            case Theme.DARK:
                setTheme(Theme.LIGHT)
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
            <div className="flex items-center justify-center w-6 h-6 bg-white dark:bg-white/5 rounded-[50px]">
                {theme === "light" && <IconWrapper Icon={OpenedEyeIcon} className="text-primary" />}
                {theme === "dark" && <IconWrapper Icon={ClosedEyeIcon} className="text-primary" />}
            </div>
            <Switch onChange={onChangeHandler} isChecked={theme === Theme.DARK && true} />
        </div>
    )
}
