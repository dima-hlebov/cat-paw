import { Search } from "@components/inputs";
import { UtilityNavigation } from "@components/ui";
import { BurgerMenu } from "@components/ui";

export function Header() {
    return (
        <header className="flex gap-sm">
            <BurgerMenu />
            <Search />
            <UtilityNavigation />
        </header>
    )
}
