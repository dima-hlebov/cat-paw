import { SvgProps } from "@components/icons";

export function UploadIcon({ className, ...props }: SvgProps): React.ReactElement<SvgProps> {
    return (
        <svg className={className} {...props} height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="upload-white-16" clipPath="url(#clip0_1_1746)">
                <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_1_1746">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}