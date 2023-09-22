import { formatMinutes } from "@lib/utils/cn"
import IconWrapper, { DislikeIcon, FavIcon, IconWrapperProps, LikeIcon } from "@components/icons"

export enum UserAction {
    Like = "Likes",
    Dislike = "Dislikes",
    Favourite = "Favourites",
}

export type UserLog = {
    id: string
    timestamp: Date
    action: UserAction
}

type LogsProps = {
    logs: UserLog[]
}

export function Logs({ logs }: LogsProps) {
    return (
        <ul className="flex flex-col gap-sm">
            {logs.map((log) => (
                <li
                    key={log.id}
                    className="flex flex-wrap items-center gap-lg p-[15px] rounded-sm bg-secondary dark:bg-white/5"
                >
                    <div className="order-1 py-[3px] px-[10px] rounded-xs text-dark bg-white dark:bg-dark dark:text-white">
                        <time dateTime={log.timestamp.getDate().toString()}>
                            {log.timestamp.getHours() + ":" + formatMinutes(log.timestamp.getMinutes())}
                        </time>
                    </div>
                    <div className="order-3 grow basis-full sm:order-2 sm:basis-auto">
                        Image ID: <span className="text-dark dark:text-white">{log.id}</span> was added to {log.action}
                    </div>
                    <div className="order-2 ml-auto sm:order-3">
                        {getActionIcon(log.action)}
                    </div>
                </li>
            ))}
        </ul>
    )
}

function getActionIcon(action: UserAction): React.ReactElement<IconWrapperProps> | null {
    switch (action) {
        case UserAction.Like:
            return <IconWrapper className="text-green-300" Icon={LikeIcon} size={"sm"} />
        case UserAction.Dislike:
            return <IconWrapper className="text-amber-300" Icon={DislikeIcon} size={"sm"} />
        case UserAction.Favourite:
            return <IconWrapper className="text-primary" Icon={FavIcon} size={"sm"} />
        default:
            return null
    }
}