import Button from "@components/buttons";
import IconWrapper, { UploadIcon } from "@components/icons";
import { Breadcrumbs } from "@app/_components/navigations";

export default function Gallery() {
    return (
        <div>
            <div className="flex content-between">
                <Breadcrumbs />
                <Button variant={"soft"}>
                    <div className="flex">
                        <IconWrapper Icon={UploadIcon} size="xs" />
                        <div>&nbsp;&nbsp;Upload</div>
                    </div>
                </Button>
            </div>
        </div>
    )
}
