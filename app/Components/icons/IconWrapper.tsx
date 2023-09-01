import { cn } from "@/app/utils/utils";
import { IconWrapperType } from "../ComponentTypes"
import { cva } from "class-variance-authority";

export const iconVariants = cva(
    "text-inherit",
    {
        variants: {
            size: {
                xs: "w-[16px] h-[16px]",
                sm: "w-[20px] h-[20px]",
                md: "w-[30px] h-[30px]"
            },
            active: {
                white: "group-active:text-white"
            },
        },
        defaultVariants: {
            size: "sm"
        }
    }
)

// Icon able to toggle betweend two icons. 
// Secondary icon and parent goroup class needs to be provided
export default function IconWrapper({ Icon, SecondaryIcon, className, size, active, ...props }: IconWrapperType) {
    return (
        <div>
            <Icon className={`${SecondaryIcon ? "group-active:hidden" : ""} ${cn(iconVariants({ size, className }))}`} {...props} />
            {SecondaryIcon ? <SecondaryIcon className={`hidden group-active:block ${cn(iconVariants({ size, active, className }))}`} /> : null}
        </div>
    )
}