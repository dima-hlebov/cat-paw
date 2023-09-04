export default function PageTitle({ heading, paragraph }: { heading: string, paragraph: string }) {
    return (
        <div>
            <p className="mt-[80px] text-[44px] font-medium leading-[58px] text-accent">{paragraph}</p>
            <h1 className="text-xl">{heading}</h1>
        </div>
    )
}
