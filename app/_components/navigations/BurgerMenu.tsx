"use client"

import Button from "@components/buttons";
import IconWrapper, { CloseIcon, MenuIcon } from "@components/icons";
import { Container } from "@layouts/index";
import { MainNavigation } from "@app/_components/navigations";

import { useAppDispatch, useAppSelector } from "@hooks/index";
import { toggleMenu } from "@context/features/burgermenuSlice";
import { ThemeSwitcher } from "@app/_components/widgets";

export function BurgerMenu() {
    const isMenuOpen = useAppSelector(state => state.burgerMenuReducer.isMenuOpen);
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(toggleMenu())
    }

    return (
        <div>
            <Button
                variant={"monochrome"}
                size={"md"}
                onClick={handleClick}
                aria-label="Open menu">
                <IconWrapper Icon={MenuIcon} size={"md"} />
            </Button>
            {/* overlay */}
            <div className={`${isMenuOpen ? "block" : "hidden"} inset-0 absolute bg-secondary z-20 dark:bg-dark`}>
                <Container>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <ThemeSwitcher />
                        </div>
                        <Button
                            onClick={handleClick}
                            variant={"monochrome"}
                            size={"md"}
                            aria-label="Close menu">
                            <IconWrapper Icon={CloseIcon} size={"md"} />
                        </Button>
                    </div>
                    <MainNavigation onClick={handleClick} />
                </Container>
            </div>
        </div>
    )
}
