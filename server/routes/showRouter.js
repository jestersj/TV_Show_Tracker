const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const showController = require('../controllers/ShowController')

router.get('/', authMiddleware, showController.fetchAll)
router.get('/:id', authMiddleware, showController.fetchOne)
router.post('/', authMiddleware, showController.add)

module.exports = router