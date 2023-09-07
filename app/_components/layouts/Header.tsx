import { Search } from "@components/inputs";
import { UtilityNavigation } from "@components/ui";
import { Menu } from "@components/ui";

export default function Header() {
    return (
        <header className="flex gap-[10px]">
            <Menu />
            <Search />
            <UtilityNavigation />
        </header>
    )
}
