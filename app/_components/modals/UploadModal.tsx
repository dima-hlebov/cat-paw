"use client"

import UploadForm from "../forms/UploadForm";
import Modal from "./Modal";

export function UploadModal() {
    return (
        <Modal>
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
