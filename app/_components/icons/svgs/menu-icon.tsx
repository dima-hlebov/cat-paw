import { SvgProps } from "@components/icons";

export function MenuIcon({ className, ...props }: SvgProps): React.ReactElement<SvgProps> {
    return (
        <svg className={className} {...props} width="30" height="30" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z" fill="currentColor" />
        </svg>
    )
}



