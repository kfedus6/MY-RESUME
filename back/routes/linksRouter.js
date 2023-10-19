const Router = require('express')
const router = new Router()
const linksController = require('../controllers/linksController')

router.post('/', linksController.createLink)
router.get('/', linksController.findAllLinks)
router.patch('/', linksController.updateLink)
router.delete('/', linksController.destroyLink)

module.exports = router