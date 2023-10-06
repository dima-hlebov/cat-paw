import { getVotes } from "@services/cat_api/get/getVotes"
import { Breadcrumbs } from "@components/navigations"
import Gallery, { GalleryItem, renderGridItem } from "@components/widgets/gallery"

export default async function likes() {
    const votes = await getVotes({})
    const likes = votes.filter(vote => vote.value === 1)
    console.log(likes)

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                <Gallery>
                    {likes.map((like, i) => (
                        <GalleryItem
                            key={like.id}
                            image={{ src: like.image.url, alt: "Liked cat", width: 500, height: 500 }}
                            itemLayout={renderGridItem(i)}
                        />
                    ))}
                </Gallery>
            </main>
        </div>
    )
}
