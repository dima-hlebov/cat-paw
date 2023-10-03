"use client"

import { clearUploadedFiles, setIsUploaded, setUploadedFiles } from "@context/features/uploadModalSlice"
import { useAppDispatch, useAppSelector } from "@app/_hooks"
import { UploadedImage } from "@app/_types/cat_api";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function DropZone() {
  const { files, isUploaded } = useAppSelector(state => state.modalReducer)
  const dispatch = useAppDispatch()

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsUploaded(null))
    dispatch(clearUploadedFiles())

    const { files } = e.target;

    if (files?.length) {
      const serializedFiles = Array.from(files).map(file => {
        const serializedFile: UploadedImage = {
          name: file.name,
          url: URL.createObjectURL(file),
          type: file.type,
          sub_id: ""
        }
        return serializedFile
      })
      dispatch(setUploadedFiles(serializedFiles));
    }
  };

  return (
    <div className="flex items-center justify-center w-full rounded-sm bg-white dark:bg-white/5 ">
      <label
        htmlFor="dropzone-file"
        className={
          twMerge("flex flex-col items-center justify-center w-full bg-center bg-no-repeat bg-contain border-2 border-dashed rounded-sm custom-cursor px-lg py-md aspect-video bg-upload-bg-light bg-origin-content border-primary/20 hover:border-primary sm:bg-auto dark:bg-upload-bg-dark",
            `${isUploaded === false ? "bg-primary/20 border-primary" : ""}`
          )}
      >
        {files.length
          ?
          <div className="relative w-full h-full">
            <Image
              className="object-cover object-center rounded-sm"
              src={files[0].url}
              alt={"Uploaded image"}
              fill
              quality={100}
            />
          </div>
          : <p><span className="text-dark dark:text-white">Drag here</span> your file or <span className="text-dark dark:text-white">Click here</span> to upload</p>
        }
        <input onChange={onFileChange} id="dropzone-file" type="file" accept="image/*" className="hidden" />
      </label>
    </div>
  )
}