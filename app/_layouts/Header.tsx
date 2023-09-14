import { Search } from "@components/inputs";
import { UtilityNavigation, BurgerMenu } from "@app/_components/navigations";

export function Header() {
    return (
        <header className="flex flex-wrap gap-sm justify-between">
            <div className="xl:hidden order-1">
                <BurgerMenu />
            </div>
            <div className="order-3 grow basis-full sm:order-2 sm:basis-auto">
                <Search />
            </div>
            <div className="order-2 sm:order-3">
                <UtilityNavigation />
            </div>
        </header>
    )
}
