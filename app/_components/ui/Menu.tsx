"use client"

import Button, { Link, buttonVariants } from "@components/buttons";
import IconWrapper, { CloseIcon, MenuIcon } from "@components/icons";
import { useState } from "react";
import { Container } from "@components/layouts";
import { MainNavigation } from "@components/ui";

export function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="xl:hidden">
            <Button
                variant={"white"}
                size={"md"}
                onClick={() => setIsMenuOpen(true)}>
                <IconWrapper Icon={MenuIcon} size={"md"} />
            </Button>
            {/* overlay */}
            <div className={`${isMenuOpen ? "block" : "hidden"} w-screen h-screen absolute top-0 left-0 bg-secondary z-10`}>
                <Container>
                    <div className="flex justify-end">
                        <Button
                            onClick={() => setIsMenuOpen(false)}
                            variant={"white"}
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
