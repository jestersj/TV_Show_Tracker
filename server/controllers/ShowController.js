const ShowService = require('../services/ShowService')
class ShowController {
    async fetchAll(req, res) {
        const userId = req.user.id
        const shows = await ShowService.fetchAll(userId)
        return res.json(shows)
    }
    async fetchOne(req, res) {
        const userId = req.user.id
        const {id} = req.params
        const show = await ShowService.fetchOne(userId, id)
        return res.json(show)
    }
    async add(req, res) {
        const userId = req.user.id
        const {name, rating, description} = req.body
        const {img} = req.files
        const show = await ShowService.add(userId, name, rating, img, description)
        return res.json(show)
    }
    async delete(req, res) {
        const userId = req.user.id
        const {id} = req.params
        const show = await ShowService.delete(userId, id)
        return res.json(show)
    }
    async edit(req, res) {
        const userId = req.user.id
        const {id} = req.params
        const {name, rating, description} = req.body
        const {img} = req.files
        const show = await ShowService.edit(userId, id, name, rating, img, description)
        return res.json(show)
    }
}

module.exports = new ShowController()