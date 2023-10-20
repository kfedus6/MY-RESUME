const Router = require('express')
const router = new Router()
const skillsController = require('../controllers/skillsController')

router.post('/', skillsController.createSkill)
router.get('/', skillsController.findAllSkills)
router.patch('/:id', skillsController.updateSkill)
router.delete('/:id', skillsController.destroySkill)

module.exports = router