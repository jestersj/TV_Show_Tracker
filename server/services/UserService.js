const jwt = require("jsonwebtoken");
const ApiError = require("../errors/ApiError");
const {User} = require("../models");
const bcrypt = require("bcrypt");

const createJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserService {
    async registration(email, password) {
        if (!email || !password) {
            throw ApiError.badRequest('Некорректный email или пароль')
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            throw ApiError.badRequest('Пользователь с таким email уже существует')
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword})
        const token = createJwt(user.id, user.email)
        return {token}
    }
    async login(email, password) {
        const user = await User.findOne({where: {email}})
        if (!user){
            throw ApiError.internal('Пользователь не найден')
        }
        const comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            throw ApiError.internal('Неверный пароль')
        }
        const token = createJwt(user.id, user.email)
        return {token}
    }
    refresh(id, email) {
        const token = createJwt(id, email)
        return {token}
    }
}

module.exports = new UserService()