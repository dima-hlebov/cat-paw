import Gallery, { GalleryItemLink, renderGridItem } from '@components/widgets/gallery'
import { Breadcrumbs } from '@components/navigations'

import { SearchParams, getSearchParams } from '@lib/utils'
import { defaultBreed, getCats } from '@services/cat_api'
import { Cat, Image, Limit } from '@app/_types/cat_api'
import Alert from '@components/alerts'

export default async function Search({ searchParams }: SearchParams) {
    const breedIds = getSearchParams(searchParams?.breeds)
    const query = getSearchParams(searchParams?.q)

    const breeds: Cat[] = await getCats({ breed: breedIds, has_breeds: 1, limit: 20 as Limit, type: Image.STATIC })
    return (
        <div>
            <Breadcrumbs />
            <main className="mt-sm sm:mt-md">
                <div>Search results for: <span className="text-dark capitalize">{query}</span></div>
                <div className="mt-sm sm:mt-md">
                    {breeds.length && breedIds.length
                        ? <Gallery>
                            {breeds.map((breed, i) => (
                                <GalleryItemLink
                                    key={breed.id}
                                    image={{ src: breed.url, alt: breed.breeds[0].name, width: breed.width, height: breed.height }}
                                    itemLayout={renderGridItem(i)}
                                    link={{ href: `breeds/${breed.breeds[0].id}` }} />
                            ))}
                        </Gallery>
                        : <Alert text={"No item found"} />}
                </div>
            </main>
        </div>
    )
}
