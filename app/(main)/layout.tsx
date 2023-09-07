import { Search } from "@components/inputs";
import { Link, buttonVariants } from "@components/buttons";
import IconWrapper, { DislikeIcon, FavIcon, LikeIcon } from "@components/icons";
import Header from "@components/layouts/Header";
import { Container } from "@components/layouts";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Container>
                <Header />
                <div className="mt-[10px] p-[20px] bg-white rounded-[20px]">
                    {children}
                </div>
            </Container>
        </div>
    )
}
