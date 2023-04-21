const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const showRouter = require('./showRouter')

router.use('/user', userRouter)
router.use('/show', showRouter)

module.exports = router