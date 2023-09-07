import Header from "@components/layouts/Header";
import { Container } from "@components/layouts";
import { Breadcrumbs } from "@components/ui";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Container>
                <Header />
                <div className="mt-[10px] p-[20px] bg-white rounded-[20px]">
                    <Breadcrumbs />
                    {children}
                </div>
            </Container>
        </div>
    )
}
