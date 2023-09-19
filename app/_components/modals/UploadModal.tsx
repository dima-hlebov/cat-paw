"use client"

import { useAppSelector } from "@app/_hooks";
import { DropZone } from "@components/inputs";
import Modal from "./Modal";
import Button from "../buttons/Button";

export function UploadModal() {
    const { files } = useAppSelector(state => state.modalReducer)

    return (
        <Modal>
            <div className="text-center mt-xl">
                <h2>Upload a .jpg or .png Cat Image</h2>
                <p className="text-xl mt-sm">Any uploads must comply with the <a href="https://thecatapi.com/privacy" className="text-primary">upload guidelines</a> or face deletion.</p>
            </div>
            <form className="flex flex-col items-center mt-xl gap-md">
                <DropZone />
                {files.map((file, i) => (
                    <p key={i} className="break-all">
                        {`Image File Name: ${file.name}`}
                    </p>
                ))}
                <Button variant={"primary"} state={"isActive"}>Upload photo</Button>
            </form>
        </Modal>
    )
}
