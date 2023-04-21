const {User} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const ApiError = require('../errors/ApiError')
const UserService = require('../services/UserService')

const createJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body
            const token = await UserService.registration(email, password)
            return res.json(token)
        } catch (e) {
            next(e)
        }
    }
    async login(req, res, next){
        try {
            const {email, password} = req.body
            const token = await UserService.login(email, password)
            res.cookie('token', token.token, {maxAge: 24 * 60 * 60 * 1000})
            return res.json(token)
        } catch (e) {
            next(e)
        }
    }
    async refresh(req, res) {
        const {id, email} = req.user
        const token = UserService.refresh(id, email)
        return res.json(token)
    }
}

module.exports = new UserController()