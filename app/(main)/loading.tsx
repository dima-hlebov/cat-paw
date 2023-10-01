import { LoadingIcon } from "@app/_components/icons";
import IconWrapper from "@app/_components/icons/IconWrapper";
import { Breadcrumbs } from "@app/_components/navigations";

export default function LoadingMain() {
    return (
        <div className="w-full">
            <div>
                <Breadcrumbs />
            </div>
            <div className="mt-md flex justify-center">
                <IconWrapper Icon={LoadingIcon} className="w-[100px] h-[100px]" />
            </div>
        </div>
    )
}
