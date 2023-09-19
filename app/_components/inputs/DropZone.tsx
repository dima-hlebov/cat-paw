"use client"

import { clearFiles, setFiles } from "@context/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@app/_hooks"
import Image from "next/image";
import { useEffect, useState } from "react";

type DropZoneProps = {

}

export function DropZone() {
  const { files } = useAppSelector(state => state.modalReducer)
  const dispatch = useAppDispatch()

  const [images, setImages] = useState<string[]>([]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      dispatch(setFiles([...files]));
    } else {
      dispatch(clearFiles());
    }
  };

  // Tuned to work for multiple uploads
  useEffect(() => {
    const fileReaders: FileReader[] = [];
    let isCancel = false;
    if (files.length) {
      const promises = files.map(file => {
        return new Promise<string>((resolve, reject) => {
          const fileReader = new FileReader();
          fileReaders.push(fileReader);
          fileReader.onload = (e) => {
            const result = e.target?.result as string
            if (result) {
              resolve(result);
            }
          }
          fileReader.onabort = () => {
            reject(new Error("File reading aborted"));
          }
          fileReader.onerror = () => {
            reject(new Error("Failed to read file"));
          }
          fileReader.readAsDataURL(file);
        })
      });
      Promise
        .all(promises)
        .then(images => {
          if (!isCancel) {
            setImages(images);
          }
        })
        .catch(reason => {
          console.log(reason);
        });
    };
    return () => {
      isCancel = true;
      fileReaders.forEach(fileReader => {
        if (fileReader.readyState === 1) {
          fileReader.abort()
        }
      })
    }
  }, [files]);

  return (
    <div className="flex items-center justify-center w-full ">
      <label htmlFor="dropzone-file" className="custom-cursor flex flex-col items-center justify-center w-full px-lg py-md aspect-video border-2 bg-white border-primary/20 hover:border-primary border-dashed rounded-sm bg-[url('../public/img/upload-bg.svg')] bg-origin-content bg-contain sm:bg-auto bg-center bg-no-repeat">
        {images.length
          ?
          <div className="relative w-full h-full">
            <Image
              className="object-cover object-center rounded-sm"
              src={images[0]}
              alt={"Uploaded image"}
              fill
              quality={100}
            />
          </div>
          : <p><span className="text-dark">Drag here</span> your file or <span className="text-dark">Click here</span> to upload</p>
        }
        <input onChange={onFileChange} id="dropzone-file" type="file" accept="image/*" className="hidden" />
      </label>
    </div>
  )
}