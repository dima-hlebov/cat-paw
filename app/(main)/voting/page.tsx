import { Breadcrumbs } from "@components/ui/navigations";

import { VotingPanel, Logs, UserAction, UserLog } from "@features/voting";

import CatPic from "@img/cat-pic.jpg"


export default function App() {
    const alt: string = "some alt"
    const logs: UserLog[] = [
        { id: "1as12fds", timestamp: new Date(), action: UserAction.Like },
        { id: "1as12fds", timestamp: new Date(), action: UserAction.Dislike },
        { id: "1as12fds", timestamp: new Date(), action: UserAction.Favourite }
    ]
    return (
        <div>
            <Breadcrumbs />
            <main className="mt-md">
                <div>
                    <VotingPanel image={{ alt: alt, src: CatPic }} />
                    <div className="mt-2xl">
                        <Logs logs={logs} />
                    </div>
                </div>
            </main>
        </div>
    )
}
