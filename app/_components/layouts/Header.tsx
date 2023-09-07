import { Search } from "@components/inputs";
import { UtilityNavigation } from "@components/layouts";
import Menu from "@components/Menu";

export default function Header() {
    return (
        <header className="flex gap-[10px]">
            <Menu />
            <Search />
            <UtilityNavigation />
        </header>
    )
}
