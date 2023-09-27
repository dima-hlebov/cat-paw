"use client"
import React from 'react'

type FormProps = {
    children: React.ReactNode
} & React.FormHTMLAttributes<FormProps>

export default function Form({ children, className }: FormProps) {
    return (
        <form onSubmit={(e) => e.preventDefault()} className={className}>
            {children}
        </form>
    )
}
