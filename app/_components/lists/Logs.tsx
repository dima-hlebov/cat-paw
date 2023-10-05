import IconWrapper, { DislikeIcon, FavIcon, IconWrapperProps, LikeIcon } from "@components/icons"
import { Log, LogAction } from "@app/_types/Log.type"

export function Logs({ logs, ...props }: { logs: Log[] } & React.HTMLProps<HTMLUListElement>) {
    return (
        <ul className="flex flex-col gap-sm" {...props}>
            {logs.map((log, i) => (
                <li
                    key={i}
                    className="flex flex-wrap items-center gap-sm sm:gap-lg p-[15px] ml-sm rounded-sm bg-secondary dark:bg-white/5"
                >
                    <div className="order-1 py-[3px] px-[10px] rounded-xs text-dark bg-white dark:bg-dark dark:text-white">
                        <time>
                            {log.timestamp}
                        </time>
                    </div>
                    <div className="order-3 grow basis-full sm:order-2 sm:basis-auto">
                        {getLogText(log.message, log.action)}
                    </div>
                    <div className="order-2 ml-auto sm:order-3">
                        {getLogIcon(log.action)}
                    </div>
                </li>
            ))}
        </ul>
    )
}

function getLogText(message: string, action: LogAction): React.ReactElement {
    switch (action) {
        case LogAction.LIKE:
            return <div>Image ID: <span className="text-dark dark:text-white">{message}</span> was added to Likes</div>
        case LogAction.DISLIKE:
            return <div>Image ID: <span className="text-dark dark:text-white">{message}</span> was added to Dislikes</div>
        case LogAction.FAVOURITE:
            return <div>Image ID: <span className="text-dark dark:text-white">{message}</span> was added to Favourites</div>
        case LogAction.UNFAVOURITE:
            return <div>Image ID: <span className="text-dark dark:text-white">{message}</span> was removed from Favourites</div>
        default:
            return <div></div>
    }
}

function getLogIcon(action: LogAction): React.ReactElement<IconWrapperProps> | null {
    switch (action) {
        case LogAction.LIKE:
            return <IconWrapper className="text-green-300" Icon={LikeIcon} size={"sm"} />
        case LogAction.DISLIKE:
            return <IconWrapper className="text-amber-300" Icon={DislikeIcon} size={"sm"} />
        case LogAction.FAVOURITE:
            return <IconWrapper className="text-primary" Icon={FavIcon} size={"sm"} />
        default:
            return null
    }
}