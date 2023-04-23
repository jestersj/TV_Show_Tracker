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
    async add(userId, name, rating, img, description) {
        let fileName = uuid.v4() + '.jpg'
        await img.mv(resolve(__dirname, '..', 'static', fileName))
        return await Show.create({name, rating, description, img: fileName, userId})
    }
}

module.exports = new ShowService()