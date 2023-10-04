import { cva } from "class-variance-authority";
import { cn } from "@lib/utils/cn";
import { IconWrapperProps } from "@components/icons/icons.types";

export const iconVariants = cva(
    "text-inherit",
    {
        variants: {
            size: {
                xs: "w-[16px] h-[16px]",
                sm: "w-[20px] h-[20px]",
                md: "w-[30px] h-[30px]",
                btnGroup: "w-[22px] h-[22px] sm:w-[30px] sm:h-[30px]"
            },
            active: {
                white: "group-active:text-white"
            },
        },
    }
)
// Wrapper for svgs which is able to toggle betweend two icons. 
// To toggle second icon needs to be provided
export default function IconWrapper({ Icon, SecondaryIcon, className, size, active, ...props }: IconWrapperProps) {
    return (
        <div>
            <Icon className={`${SecondaryIcon ? "group-active:hidden" : ""} ${cn(iconVariants({ size, className }))}`} {...props} />
            {SecondaryIcon ? <SecondaryIcon className={` hidden group-active:block ${cn(iconVariants({ size, active, className }))}`} {...props} /> : null}
        </div>
    )
}