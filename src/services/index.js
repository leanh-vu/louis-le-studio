import axios from "axios";

const appApi = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 30000,
})

export default async function getShoppingList(params) {
    let {data} = await appApi.get('items.json', {
        params
    })
    return data
}
