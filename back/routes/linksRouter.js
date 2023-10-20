const Router = require('express')
const router = new Router()
const linksController = require('../controllers/linksController')

router.post('/', linksController.createLink)
router.get('/', linksController.findAllLinks)
router.patch('/:id', linksController.updateLink)
router.delete('/:id', linksController.destroyLink)

module.exports = router