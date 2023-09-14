"use client"

import Button from "@app/_components/buttons/Button";
import { SortIcon, SortRevertIcon } from "@components/icons";
import IconWrapper from "@app/_components/icons/IconWrapper";
import { Select } from "@components/inputs";

export function SortForm() {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-wrap gap-sm"
        >
            <div className="grow basis-full sm:basis-auto">
                <Select
                    variant={"sorting"}
                    options={["All breeds", "Abyssinian", "Aegean", "American Bobtail", "American Curl", "American Shorthair"]} />
            </div>
            <div className="flex gap-sm grow sm:grow-0">
                <div className="grow">
                    <Select
                        variant={"sorting"}
                        options={["Limit: 5", "Limit: 10", "Limit: 15", "Limit: 20"]} />
                </div>
                <Button variant={"secondary"} state={"isHoverable"} size={"sm"}>
                    <IconWrapper Icon={SortIcon} />
                </Button>
                <Button variant={"secondary"} state={"isHoverable"} size={"sm"}>
                    <IconWrapper Icon={SortRevertIcon} />
                </Button>
            </div>
        </form>
    )
}
