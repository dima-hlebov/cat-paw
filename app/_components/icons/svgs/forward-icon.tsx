import { SvgProps } from "@components/icons";

export function ForwardIcon({ className, ...props }: SvgProps): React.ReactElement<SvgProps> {
    return (
        <svg className={className} {...props} width="20" height="20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" color="currentColor" />
        </svg>
    )
}