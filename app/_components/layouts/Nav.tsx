import React from "react";

export function Navigation({ className, children }: { className: string, children: React.ReactNode }) {
    return (
        <nav>
            <ul className={className}>
                {React.Children.toArray(children).map((link, i) => (
                    <li key={i}>
                        {link}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
