const Router = require('express')
const router = new Router()
const experienceController = require('../controllers/experienceController')

router.post('/', experienceController.createExperience)
router.get('/', experienceController.findAllExperiences)
router.patch('/:id', experienceController.updateExperience)
router.delete('/:id', experienceController.destroyExperience)

module.exports = router