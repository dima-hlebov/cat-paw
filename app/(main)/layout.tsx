import { Header, Container } from "@layouts/index";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            <Container>
                <Header />
                <div className="h-full bg-white rounded-md mt-sm p-md dark:bg-white/5">
                    {children}
                </div>
            </Container>
        </div>
    )
}
