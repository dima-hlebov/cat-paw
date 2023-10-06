import { getVotes } from "@app/_services/cat_api/get/getVotes"
import { Breadcrumbs } from "@components/navigations"
import Gallery, { GalleryItem, renderGridItem } from "@components/widgets/gallery"

import CatPic from "@img/cat-pic.jpg"

export default async function Likes() {
    const votes = await getVotes()
    const dislikes = votes.filter(vote => vote.value === -1)

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                <Gallery>
                    {dislikes.map((dislike, i) => (
                        <GalleryItem
                            key={dislike.id}
                            image={{ src: dislike.image.url, alt: "Disliked cat", width: 500, height: 500 }}
                            itemLayout={renderGridItem(i)}
                        />
                    ))}
                </Gallery>
            </main>
        </div>
    )
}
