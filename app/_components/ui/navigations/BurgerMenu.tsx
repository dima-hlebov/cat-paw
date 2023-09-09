"use client"

import Button from "@components/buttons";
import IconWrapper, { CloseIcon, MenuIcon } from "@components/icons";
import { Container } from "@components/layouts";
import { MainNavigation } from "@components/ui";

import { useAppDispatch, useAppSelector } from "@app/_hooks/reduxHooks";
import { toggle } from "@context/features";

export function BurgerMenu() {
    const isMenuOpen = useAppSelector(state => state.burgerMenuReducer.isMenuOpen);
    const dispatch = useAppDispatch()

    return (
        <div className="xl:hidden">
            <Button
                variant={"monochrome"}
                size={"md"}
                onClick={() => dispatch(toggle())}>
                <IconWrapper Icon={MenuIcon} size={"md"} />
            </Button>
            {/* overlay */}
            <div className={`${isMenuOpen ? "block" : "hidden"} w-screen h-screen absolute top-0 left-0 bg-secondary z-10`}>
                <Container>
                    <div className="flex justify-end">
                        <Button
                            onClick={() => dispatch(toggle())}
                            variant={"monochrome"}
                            size={"md"}>
                            <IconWrapper Icon={CloseIcon} size={"md"} />
                        </Button>
                    </div>
                    <MainNavigation />
                </Container>
            </div>
        </div>
    )
}
