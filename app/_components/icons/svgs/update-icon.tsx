import { Svg } from "@components/icons";

export function UpdateIcon({ className, ...props }: Svg): React.ReactElement<Svg> {
    return (
        <svg className={className} {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="update-white-20">
                <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M9.48189 2.49989L7.93396 0.953004L8.88633 0L12.0577 3.16928L8.88634 6.33873L7.93395 5.38576L9.47232 3.84832C5.51244 3.99813 2.3473 7.25498 2.3473 11.2478C2.3473 15.3361 5.66547 18.6527 9.75744 18.6527C13.8494 18.6527 17.1676 15.3361 17.1676 11.2478V10.5742H18.5149V11.2478C18.5149 16.081 14.5927 20 9.75744 20C4.92221 20 1 16.081 1 11.2478C1 6.50682 4.77407 2.64542 9.48189 2.49989Z" fill="currentColor" />
            </g>
        </svg>
    )
}