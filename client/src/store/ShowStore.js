import {makeAutoObservable} from "mobx";

class ShowStore {
    constructor() {
        this._shows = []
        makeAutoObservable(this)
    }
    setShows(shows) {
        this._shows = shows
    }
    sortByRatingDown() {
        this._shows = this._shows.sort((a, b) => b.rating - a.rating)
    }
    sortByRatingUp() {
        this._shows = this._shows.sort((a, b) => a.rating - b.rating)
    }
    sortByName() {
        this._shows = this._shows.sort((a, b) => a.name.localeCompare(b.name))
    }
    sortByDateOld() {
        this._shows = this._shows.sort((a, b) => a.id - b.id)
    }
    sortByDateNew() {
        this._shows = this._shows.sort((a, b) => b.id - a.id)
    }
    get shows() {
        return this._shows
    }
}
export const showStore = new ShowStore()