import Button from "@components/buttons";
import Alert from "@components/alerts";
import { DropZone } from "@components/inputs";

import { useAppSelector } from "@app/_hooks"

export default function UploadForm() {
    const { files } = useAppSelector(state => state.modalReducer)

    return (
        <form>
            <DropZone />
            {files.map((file, i) => (
                <p key={i} className="break-all">
                    {`Image File Name: ${file.name}`}
                </p>
            ))}
            {files.length
                ?
                <div>
                    <div className="flex justify-center mt-sm sm:mt-md">
                        <Button variant={"primary"} state={"isActive"}>Upload photo</Button>
                    </div>
                </div>
                :
                <p className="text-center mt-sm sm:mt-md">
                    No files selected
                </p>
            }
            <div className="mt-sm sm:mt-md">
                <Alert variant={"destructive"} text="No Cat found - try a different one" color={"monochrome"} />
            </div>

        </form>
    )
}
