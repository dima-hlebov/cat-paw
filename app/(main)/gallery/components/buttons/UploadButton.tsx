"use client"
import { toggleUploadModal } from "@app/_context/features/uploadModalSlice";
import { useAppDispatch } from "@app/_hooks";
import Button from "@components/buttons";
import IconWrapper, { UploadIcon } from "@components/icons";

export function UploadButton() {
    const dispatch = useAppDispatch()

    const handleUploadClick = () => {
        dispatch(toggleUploadModal())
    }

    return (
        <Button
            variant={"soft"}
            onClick={handleUploadClick}
            aria-label="Upload">
            <div className="flex justify-center ">
                <IconWrapper Icon={UploadIcon} size="xs" />
                <div>&nbsp;&nbsp;Upload</div>
            </div>
        </Button>
    )
}
