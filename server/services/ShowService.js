const {Show} = require("../models");
const uuid = require('uuid')
const {resolve} = require("path");
const {unlink} = require("fs");

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
    async delete(userId, id) {
        const show = await Show.findOne({where: {userId, id}})
        await unlink(resolve(__dirname, '..', 'static', show.img), (err) => {
            err ? console.log(err) : console.log('logo deleted')
        })

        await show.destroy()
        return show
    }
    async edit(userId, id, name, rating, img, description) {
        const show = await Show.findOne({where: {userId, id}})
        await unlink(resolve(__dirname, '..', 'static', show.img), (err) => {
            err ? console.log(err) : console.log('logo deleted')
        })
        let fileName = uuid.v4() + '.jpg'
        await img.mv(resolve(__dirname, '..', 'static', fileName))
        await show.update({name, rating, description, img: fileName, userId})
        return show
    }
}

module.exports = new ShowService()