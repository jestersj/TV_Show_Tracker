const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey:true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
})
const Show = sequelize.define('show', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey:true},
    name: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING(1000)},
    img: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER},
})

User.hasMany(Show)
Show.belongsTo(User)

module.exports = {
    User,
    Show
}