import {db} from "./firestore.js"

let uploadedImages = []
const uploadedImages = db.collection("uploadedImages")

export const accessToken = 'pk.eyJ1IjoianVsaWVoYXVnZSIsImEiOiJjazUzbHVtNDYwOG5uM21xdHc1dW5hOHJvIn0.KujRaoDzyv3ehKHQaUxqAw'

export const listItems = [
    {
        city: uploadedImages.data().city,
        country: uploadedImages.data().country,
        url: uploadedImages.data().url
    }
]