export function Navigation({ children, className }:
    { children: React.ReactNode, className?: string }) {
    return (
        <nav className={`flex flex-col ${className}`}>
            {children}
        </nav>
    )
}
