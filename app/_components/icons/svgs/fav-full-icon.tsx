import { SvgProps } from "@components/icons";

export function FavFullIcon({ className, ...props }: SvgProps): React.ReactElement<SvgProps> {
    return (
        <svg className={className} {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="fav-full-white-20">
                <path id="Vector" d="M5.38071 1C2.40903 1 0 3.40903 0 6.38071C0 7.80777 0.566893 9.17637 1.57597 10.1854L9.5286 18.1381C9.78895 18.3984 10.2111 18.3984 10.4714 18.1381L18.424 10.1854C19.4331 9.17637 20 7.80777 20 6.38071C20 3.40903 17.591 1 14.6193 1C13.1922 1 11.8236 1.56689 10.8146 2.57597L10 3.39052L9.18545 2.57597C8.17637 1.5669 6.80777 1 5.38071 1Z" fill="currentColor" />
            </g>
        </svg>
    )
}
