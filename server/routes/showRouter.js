const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const showController = require('../controllers/ShowController')

router.get('/', authMiddleware, showController.fetchAll)
router.get('/:id', authMiddleware, showController.fetchOne)
router.post('/', authMiddleware, showController.add)
router.delete('/:id', authMiddleware, showController.delete)
router.put('/:id', authMiddleware, showController.edit)

module.exports = router