import { Header, Container } from "@layouts/index";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            <div className="flex flex-col flex-grow h-full">
                <Header />
                <div className="h-full bg-white rounded-md mt-sm p-md dark:bg-white/5">
                    {children}
                </div>
            </div>
        </Container>
    )
}
