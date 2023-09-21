import { ItemLayout } from ".."

type GalleryProps = {
    children: React.ReactNode
}

// temp props type
// Renders gallery items based on type provided 

export default function Gallery({ children }: GalleryProps) {
    return (
        <div className="grid grid-cols-1 gap-y-sm sm:gap-md sm:grid-cols-3 ">
            {children}
        </div>
    )
}

export function renderGridItem(i: number): ItemLayout {
    const cellNum = i % 10
    switch (cellNum) {
        case 0:
            return ItemLayout.COLS_1_ROWS_2
        case 3:
            return ItemLayout.COLS_2_ROWS_2
        case 7:
            return ItemLayout.COLS_1_ROWS_2
        case 8:
            return ItemLayout.COLS_2_ROWS_2
        default:
            return ItemLayout.COLS_1_ROWS_1
    }
}