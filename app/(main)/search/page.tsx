import Gallery, { GalleryItemLink, renderGridItem } from '@components/widgets/gallery'
import { Breadcrumbs } from '@components/navigations'

import { SearchParams, getSearchParams } from '@lib/utils'
import { getBreeds } from '@services/cat_api'
import { Breed } from '@app/_types/cat_api'
import Alert from '@components/alerts'

export default async function Search({ searchParams }: SearchParams) {
    const breedIds = getSearchParams(searchParams?.breeds).split(",")
    const query = getSearchParams(searchParams?.q)

    const breeds: Breed[] = await getBreeds({})

    const filteredBreeds = breeds.filter(breed => breedIds.includes(breed.id))

    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                <div>Search results for: <span className="text-dark capitalize">{query}</span></div>
                <div className="mt-sm sm:mt-md">
                    {filteredBreeds.length
                        ? <Gallery>
                            {filteredBreeds.map((breed, i) => (
                                <GalleryItemLink
                                    key={breed.id}
                                    image={{ src: breed.image.url, alt: breed.name, width: breed.image.width, height: breed.image.height }}
                                    itemLayout={renderGridItem(i)}
                                    link={{ href: `breeds/${breed.id}` }} />
                            ))}
                        </Gallery>
                        : <Alert text={"No item found"} />}
                </div>
            </main>
        </div>
    )
}
