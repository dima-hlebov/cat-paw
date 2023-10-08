export function useSmoothScroll() {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return { scrollTop }
}