const Router = require('express')
const router = new Router()
const portfolioController = require('../controllers/portfolioController')

router.post('/', portfolioController.createPortfolio)
router.get('/', portfolioController.findAllPortfolios)
router.patch('/', portfolioController.updatePortfolio)
router.delete('/', portfolioController.destroyPortfolio)

module.exports = router