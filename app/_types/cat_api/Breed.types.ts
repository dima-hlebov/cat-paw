export type Breed = {
    weight: { imperial: string, metric: string }
    id: string
    name: string
    temperament: string
    origin: string
    lifes_span: string
    wikipedia_url: string
    description: string
    indoor: number
    lap: number
    alt_names: string
    adaptability: number
    affection_level: number
    child_friendly: number
    dog_friendly: number
    energy_level: number
    grooming: number
    health_issues: number
    intelligence: number
    shedding_level: number
    social_needs: number
    stranger_friendly: number
    vocalisation: number
    experimental: number
    hairless: number
    natural: number
    rare: number
    rex: number
    suppressed_tail: number
    short_legs: number
    hypoallergenic: number
    reference_image_id: string
    image: {
        id: string
        width: number
        height: number
        url: string
    }
}
