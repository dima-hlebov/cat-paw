
type CardInfo = {
    title: string
    text: string
}
type InfoCardProps = {
    mainHeading: string,
    secondaryHeading: string
    info: CardInfo[]
}

export default function InfoCard({ mainHeading, secondaryHeading, info }: InfoCardProps) {
    const [column1, column2] = distributeByStringLength(info)
    return (
        <article className="relative px-sm pb-sm border-2 border-primary/20 rounded-md sm:px-md sm:pb-md ">
            <header className="px-lg sm:px-xl text-center">
                <div className="absolute top-0 transform -translate-x-[50%] -translate-y-[14px] sm:-translate-y-[25px] inline-block px-md py-xs rounded-md bg-white sm:px-2xl dark:bg-zinc-800">
                    <h2>{mainHeading}</h2>
                </div>
                <h3 className="mt-md sm:mt-lg">{secondaryHeading}</h3>
            </header>
            <main className="grid sm:grid-cols-2 mt-sm sm:mt-0">
                <div className="flex flex-col gap-sm p-sm sm:p-md">
                    {column1.map((item, i) => (
                        <div key={i}>
                            <h4 className="text-dark">{item.title}:</h4>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div >
                {column2 ?
                    <div className="flex flex-col gap-sm p-sm pt-0 sm:p-md">
                        {column2.map((item, i) => (
                            <div key={i} className="flex">
                                <h4 className="text-dark whitespace-pre font-medium">{`${item.title}: `}</h4>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    : null}
            </main>
        </article>
    )
}

// Distribute card fields between first and second column by text + title length 
function distributeByStringLength(info: CardInfo[]): CardInfo[][] {
    let columns: CardInfo[][] = [[], []]
    info.forEach((piece) => {
        piece.text.length + piece.title.length > 35
            ? columns[0].push(piece)
            : columns[1].push(piece)
    })
    // if first column is empty replace it with second column
    return columns[0].length === 0 ? [columns[1]] : columns
}
