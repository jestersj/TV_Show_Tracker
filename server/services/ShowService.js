const {Show} = require("../models");
const uuid = require('uuid')
const {resolve} = require("path");

class ShowService {
    async fetchAll(userId) {
        return await Show.findAll({where: {userId}})
    }
    async fetchOne(userId, id) {
        return await Show.findOne({where: {userId, id}})
    }
    async add(userId, name, rating, episode, img) {
        let fileName = uuid.v4() + '.jpg'
        await img.mv(resolve(__dirname, '..', 'static', fileName))
        return await Show.create({name, episode, rating, img: fileName, userId})
    }
}

module.exports = new ShowService()