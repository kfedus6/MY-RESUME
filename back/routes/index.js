const Router = require('express')
const router = new Router()
const aboutMeRouter = require('./aboutMeRouter')
const linksRouter = require('./linksRouter')
const skillsRouter = require('./skillsRouter')
const portfolioRouter = require('./portfolioRouter')
const experienceRouter = require('./experienceRouter')
const educationRouter = require('./educationRouter')

router.use('/aboutMe', aboutMeRouter)
router.use('/links', linksRouter)
router.use('/skills', skillsRouter)
router.use('/portfolio', portfolioRouter)
router.use('/experience', experienceRouter)
router.use('/education', educationRouter)

module.exports = router