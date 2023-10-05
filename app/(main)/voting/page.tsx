import { Breadcrumbs } from "@components/navigations";
import { VotingPanel } from "./components/panels/VotingPanel";

import { getCats } from "@services/cat_api";
import { Cat } from "@app/_types/cat_api";
import VotingLogs from "./components/lists/VotingLogs";


export default async function Voting() {
    const cat: Cat[] = await getCats({})

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-md">
                <VotingPanel cat={cat[0]} />
                <div className="mt-2xl">
                    <VotingLogs />
                </div>
            </main>
        </div>
    )
}
