export type UploadedImage = {
    name: string
    url: string
    type: string
    sub_id: string
}

export type ResponseImage = {
    id: string,
    url: string,
    pending: number
    approved: number
}