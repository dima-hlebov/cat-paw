import { Header, Container } from "@layouts/index";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Container>
                <Header />
                <div className="mt-sm p-md h-full bg-white rounded-md">
                    {children}
                </div>
            </Container>
        </div>
    )
}
