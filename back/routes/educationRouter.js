const Router = require('express')
const router = new Router()
const educationController = require('../controllers/educationController')

router.post('/', educationController.createEducation)
router.get('/', educationController.findAllEducations)
router.patch('/:id', educationController.updateEducation)
router.delete('/:id', educationController.destroyEducation)

module.exports = router