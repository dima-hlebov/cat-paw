import { Container } from "@layouts/index";
import Button from "@components/buttons";
import IconWrapper, { CloseIcon } from "@components/icons";
import { useAppDispatch } from "@app/_hooks";
import { PayloadAction } from "@reduxjs/toolkit";

type ModalProps = {
    state: { isModalOpen: boolean, dispatch: PayloadAction }
    children: React.ReactNode
}

export default function Modal({ children, state }: ModalProps) {
    const dispatch = useAppDispatch()

    const handleClick = (e: React.MouseEvent) => {
        dispatch(state.dispatch)
    }
    return (
        <div
            className={`${state.isModalOpen ? "block" : "hidden"} absolute inset-0 z-10 bg-dark/40`}>
            <div className="absolute inset-0 bg-dark/40" onClick={handleClick}></div>
            <div className="grid xl:grid-cols-2 h-full">
                <Container className="col-start-1 col-end-3 lg:col-start-2" size_={"modal"}>
                    <div className="relative flex flex-col h-full bg-secondary p-md sm:rounded-sm dark:bg-zinc-800">
                        <Button
                            onClick={handleClick}
                            variant={"monochrome"}
                            size={"sm"}
                            className="ml-auto"
                            aria-label="Close modal">
                            <IconWrapper Icon={CloseIcon} size={"sm"} />
                        </Button>
                        {children}
                    </div>
                </Container>
            </div>
        </div>
    )
}
