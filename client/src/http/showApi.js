import {$authHost} from "@/http/index";

export async function fetchAll() {
    const {data} = await $authHost.get('show')
    return data
}