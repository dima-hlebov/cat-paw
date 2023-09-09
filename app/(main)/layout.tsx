import { Header } from "@components/layouts";
import { Container } from "@components/layouts";
import { Breadcrumbs } from "@components/ui";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Container>
                <Header />
                <div className="mt-sm p-md bg-white rounded-md">
                    <Breadcrumbs />
                    {children}
                </div>
            </Container>
        </div>
    )
}
