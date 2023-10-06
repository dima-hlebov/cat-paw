import { LoadingIcon } from "@app/_components/icons";
import IconWrapper from "@app/_components/icons/IconWrapper";
import { Breadcrumbs } from "@app/_components/navigations";

export default function LoadingMain() {
    return (
        <div className="flex flex-col h-full w-full">
            <div>
                <Breadcrumbs />
            </div>
            <div className="flex justify-center items-center flex-grow mb-[60px]">
                <IconWrapper Icon={LoadingIcon} className="w-[100px] h-[100px]" />
            </div>
        </div>
    )
}
