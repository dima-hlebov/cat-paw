"use client"

import { UploadForm } from "@components/forms";
import Modal from "./Modal";
import { useAppSelector } from "@app/_hooks";
import { toggleUploadModal } from "@context/features/uploadModalSlice";

export function UploadModal() {
    const { isUploadModalOpen } = useAppSelector(state => state.modalReducer)

    return (
        <Modal state={{ isModalOpen: isUploadModalOpen, dispatch: toggleUploadModal() }}>
            <div className="text-center mt-xl">
                <h2>Upload a .jpg or .png Cat Image</h2>
                <p className="text-xl mt-sm">Any uploads must comply with the <a href="https://thecatapi.com/privacy" className="text-primary">upload guidelines</a> or face deletion.</p>
            </div>
            <div className="mt-xl">
                <UploadForm />
            </div>
        </Modal>
    )
}
