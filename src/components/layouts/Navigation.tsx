export function Navigation({ children, className }:
    { children: React.ReactNode, className?: string }) {
    return (
        <div className={className}>
            <nav className={`flex ${className}`}>
                {children}
            </nav>
        </div>
    )
}
