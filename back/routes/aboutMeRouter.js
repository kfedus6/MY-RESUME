const Router = require('express')
const router = new Router()
const aboutMeController = require('../controllers/aboutMeController')

router.post('/', aboutMeController.createAboutMe)
router.get('/', aboutMeController.findAboutMe)
router.patch('/', aboutMeController.updateAboutMe)

module.exports = router