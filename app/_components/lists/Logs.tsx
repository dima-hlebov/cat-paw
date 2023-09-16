import { formatMinutes } from "@lib/utils"
import IconWrapper, { DislikeIcon, FavIcon, IconWrapperProps, LikeIcon } from "@components/icons"

export enum UserAction {
    Like = "Likes",
    Dislike = "Dislikes",
    Favourite = "Favourites"
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
                    className="flex items-center gap-lg p-[15px] rounded-sm bg-secondary"
                >
                    <div className="py-[3px] px-[10px] rounded-xs text-dark bg-white">
                        <time dateTime={log.timestamp.getDate().toString()}>
                            {log.timestamp.getHours() + ":" + formatMinutes(log.timestamp.getMinutes())}
                        </time>
                    </div>
                    <div>
                        Image ID: <span className="text-dark">{log.id}</span> was added to {log.action}
                    </div>
                    <div className="ml-auto">
                        {getActionIcon(log.action)}
                    </div>
                </li>
            ))}
        </ul>
    )
}

function getActionIcon(action: UserAction): React.ReactElement<IconWrapperProps> {
    switch (action) {
        case UserAction.Like:
            return <IconWrapper className="text-green-300" Icon={LikeIcon} />
        case UserAction.Dislike:
            return <IconWrapper className="text-amber-300" Icon={DislikeIcon} />
        case UserAction.Favourite:
            return <IconWrapper className="text-primary" Icon={FavIcon} />
    }
}