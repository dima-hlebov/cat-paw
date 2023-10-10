"use client"

import Alert from "@components/alerts/Alert"
import { Breadcrumbs } from "@components/navigations"

export default function Error() {
    return (
        <div className="flex flex-col h-full w-full">
            <div>
                <Breadcrumbs />
            </div>
            <div className="mt-sm">
                <Alert text={"Something went wrong! Please refresh the page or come back later."} />
            </div>
        </div>
    )
}
