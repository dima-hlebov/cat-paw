"use client"
import { toggleModal } from "@context/features/modalSlice";
import { useAppDispatch } from "@app/_hooks";
import Button from "@components/buttons";
import IconWrapper, { UploadIcon } from "@components/icons";

export function UploadButton() {
    const dispatch = useAppDispatch()

    const handleUploadClick = () => {
        dispatch(toggleModal())
    }

    return (
        <Button variant={"soft"} onClick={handleUploadClick}>
            <div className="flex justify-center ">
                <IconWrapper Icon={UploadIcon} size="xs" />
                <div>&nbsp;&nbsp;Upload</div>
            </div>
        </Button>
    )
}
