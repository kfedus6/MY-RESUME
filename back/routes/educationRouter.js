const Router = require('express')
const router = new Router()
const educationController = require('../controllers/educationController')

router.post('/', educationController.createEducation)
router.get('/', educationController.findAllEducations)
router.patch('/', educationController.updateEducation)
router.delete('/', educationController.destroyEducation)

module.exports = router