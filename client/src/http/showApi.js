import {$authHost} from "@/http/index";

export async function fetchAll() {
    const {data} = await $authHost.get('show')
    return data
}

export async function fetchOne(id) {
    const {data} = await $authHost.get('show/' + id)
    return data
}

export async function addShow(show) {
    const {data} = await $authHost.post('show', show)
    return data
}

export async function editShow(id,show) {
    const {data} = await $authHost.put('show/' + id, show)
    return data
}

export async function deleteShow(id) {
    const {data} = await $authHost.delete('show/' + id)
    return data
}