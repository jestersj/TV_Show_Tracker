require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db')
const models = require('./models')
const router = require('./routes/index')
const fileUploads = require('express-fileupload')
const ErrorHandler = require('./middleware/ErrorHandilgMiddleware')
const {resolve} = require("path");


const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(resolve(__dirname, 'static')))
app.use(fileUploads({}))
app.use('/api', router)

app.use(ErrorHandler)

async function start() {
    try {
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
        await db.authenticate()
        await db.sync({alter: true})
    } catch (e) {
        console.log(e)
    }
}

start()