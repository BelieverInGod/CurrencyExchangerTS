import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/',
})

export const shopServiceApi = {
    getCategories():any {
        return api.get('categories/')
    },
    getProduct(id: string | undefined, page: number | undefined):any {
        return api.get(`categories/${id}/products?offset=0&limit=${page}`)
    },
}