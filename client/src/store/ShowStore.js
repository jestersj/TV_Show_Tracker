import {makeAutoObservable} from "mobx";

class ShowStore {
    constructor() {
        this._shows = []
        makeAutoObservable(this)
    }
    setShows(shows) {
        this._shows = shows
    }
    get shows() {
        return this._shows
    }
}
export const showStore = new ShowStore()