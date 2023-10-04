import { Logs, UserAction, UserLog } from "@components/lists";
import { Breadcrumbs } from "@components/navigations";
import { VotingPanel } from "./components/VotingPanel";

import { getCats } from "@services/cat_api";
import { Cat } from "@app/_types/cat_api";


export default async function Voting() {
    const cat: Cat[] = await getCats({})

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
                    <VotingPanel cat={cat[0]} />
                    <div className="mt-2xl">
                        <Logs logs={logs} />
                    </div>
                </div>
            </main>
        </div>
    )
}
