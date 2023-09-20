import { Container } from "@layouts/index";
import Button from "@components/buttons";
import IconWrapper, { CloseIcon } from "@components/icons";
import { useAppDispatch, useAppSelector } from "@app/_hooks";
import { toggleModal } from "@context/features/modalSlice";

type ModalProps = {
    children: React.ReactNode
}

export default function Modal({ children }: ModalProps) {
    const { isModalOpen } = useAppSelector(state => state.modalReducer)
    const dispatch = useAppDispatch()

    const handleClick = (e: React.MouseEvent) => {
        dispatch(toggleModal())
    }

    return (
        <div
            className={`${isModalOpen ? "block" : "hidden"} absolute inset-0 z-10 bg-dark/40`}>
            <div className="grid xl:grid-cols-2">
                <Container className="col-start-2 col-end-3" size_={"modal"} >
                    <div className="flex flex-col h-full bg-secondary p-md sm:rounded-sm dark:bg-zinc-800">
                        <Button
                            onClick={handleClick}
                            variant={"monochrome"}
                            size={"sm"}
                            className="ml-auto">
                            <IconWrapper Icon={CloseIcon} size={"sm"} />
                        </Button>
                        {children}
                    </div>
                </Container>
            </div>
        </div>
    )
}
