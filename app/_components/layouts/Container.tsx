export function Container({ children }: { children?: React.ReactNode }) {
    return (
        <div className="h-[calc(100%-60px)] my-[30px] mr-[30px] ml-[65px] bg-primary/20 rounded-[20px]">
            {children}
        </div>
    )
}
