"use client"

import Button from "@components/buttons";
import IconWrapper, { CloseIcon, MenuIcon } from "@components/icons";
import { Container } from "@layouts/index";
import { MainNavigation } from "@app/_components/navigations";

import { useAppDispatch, useAppSelector } from "@hooks/index";
import { toggleMenu } from "@context/features/burgermenuSlice";

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
                onClick={handleClick}>
                <IconWrapper Icon={MenuIcon} size={"md"} />
            </Button>
            {/* overlay */}
            <div className={`${isMenuOpen ? "block" : "hidden"} inset-0 absolute bg-secondary z-10`}>
                <Container>
                    <div className="flex justify-end">
                        <Button
                            onClick={handleClick}
                            variant={"monochrome"}
                            size={"md"}>
                            <IconWrapper Icon={CloseIcon} size={"md"} />
                        </Button>
                    </div>
                    <MainNavigation onClick={handleClick} />
                </Container>
            </div>
        </div>
    )
}
