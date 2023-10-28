const Router = require('express')
const router = new Router()
const sendEmailController = require('../controllers/sendEmailController')

router.post('/', sendEmailController.sendEmail)

module.exports = router