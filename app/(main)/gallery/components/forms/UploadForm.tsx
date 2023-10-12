"use client"

import Button from "@components/buttons";
import Alert from "@components/alerts";
import { DropZone } from "@components/inputs";

import { useAppDispatch, useAppSelector } from "@app/_hooks"
import { clearUploadedFiles, setIsUploaded } from "@app/_context/features/uploadModalSlice";
import { useTransition } from "react";
import IconWrapper from "@app/_components/icons/IconWrapper";
import { LoadingIcon } from "@app/_components/icons";

export function UploadForm() {
    const [isPending, startTransition] = useTransition()
    const { files, isUploaded } = useAppSelector(state => state.modalReducer)
    const dispatch = useAppDispatch()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        startTransition(async () => {
            e.preventDefault();
            const blob = await fetch(files[0].url).then(r => r.blob());
            const formData = new FormData()
            formData.append("file", blob)
            const uploadRes = await fetch('/api/upload', {
                method: "POST",
                body: formData
            })
            if (uploadRes) {
                if (uploadRes.ok) {
                    dispatch(setIsUploaded(true))
                }
                if (!uploadRes.ok) {
                    dispatch(setIsUploaded(false))
                }
            }
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <DropZone />
            {files.map((file, i) => (
                <p key={i} className="break-all text-center mt-sm sm:mt-md">
                    {`Image File Name: ${file.name}`}
                </p>
            ))}
            {files.length && isUploaded !== false
                ?
                <div>
                    <div className="flex justify-center mt-sm sm:mt-md">
                        <Button
                            variant={"primary"}
                            state={isPending ? "isDisabled" : "isActive"}
                            aria-label="upload photo"
                        >{
                                isPending
                                    ? <div className="flex items-center whitespace-pre">Uploading <IconWrapper Icon={LoadingIcon} size={"xs"} /></div>
                                    : "Upload photo"}
                        </Button>
                    </div>
                </div> : null}
            {!files.length && isUploaded !== false
                ? <p className="text-center mt-sm sm:mt-md">No files selected</p>
                : null}

            <div className="mt-sm sm:mt-md">
                {isUploaded === true
                    ? <Alert variant={"succes"} text="Thanks for the Upload - Cat found!" color={"monochrome"} />
                    : isUploaded === false ? <Alert variant={"destructive"} text="No Cat found - try a different one" color={"monochrome"} />
                        : null
                }
            </div>

        </form>
    )
}
