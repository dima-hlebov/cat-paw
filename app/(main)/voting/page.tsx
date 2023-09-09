import { Logs, VotingPanel } from "@components/ui";

import { UserAction, UserLog } from "@app/_components/ui/Logs";
import CatPic from "@img/cat-pic.jpg"


export default function App() {
    const alt: string = "some alt"
    const logs: UserLog[] = [
        { id: "1as12fds", timestamp: new Date(), action: UserAction.Like },
        { id: "1as12fds", timestamp: new Date(), action: UserAction.Dislike },
        { id: "1as12fds", timestamp: new Date(), action: UserAction.Favourite }
    ]
    return (
        <main className="mt-md">
            <div>
                <VotingPanel image={{ alt: alt, src: CatPic }} />
                <div className="mt-2xl">
                    <Logs logs={logs} />
                </div>
            </div>
        </main>
    )
}
