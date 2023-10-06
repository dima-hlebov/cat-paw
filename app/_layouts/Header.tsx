import { Search } from "@app/_components/inputs";
import { UtilityNavigation, BurgerMenu } from "@app/_components/navigations";
import { getBreeds } from "@services/cat_api";

export async function Header() {
    const breeds = await getBreeds({})

    return (
        <header className="flex flex-wrap gap-sm justify-between">
            <div className="xl:hidden order-1">
                <BurgerMenu />
            </div>
            <div className="order-3 grow basis-full sm:order-2 sm:basis-auto">
                <Search
                    placeholder="Search for breeds by name"
                    initialData={breeds}
                />
            </div>
            <div className="order-2 sm:order-3">
                <UtilityNavigation />
            </div>
        </header>
    )
}
