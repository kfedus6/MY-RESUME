const { Portfolio } = require('../models/models')
const ApiError = require('../exceptions/appiError')
const uuid = require('uuid')
const path = require('path')

class PortfolioController {
    async createPortfolio(req, res, next) {
        try {
            const { title, link } = req.body
            const { img } = req.files
            const imgName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', imgName))
            const portfolio = await Portfolio.create({
                title: title,
                link: link,
                image: imgName
            })
            return res.json(portfolio)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async findAllPortfolios(req, res, next) {
        try {
            const portfolio = await Portfolio.findAll()
            return res.json(portfolio)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async updatePortfolio(req, res, next) {
        try {
            if (req.files === undefined) {
                const { title, link } = req.body
                const { id } = req.params
                let img
                const findIdPortfolio = await Portfolio.findOne({ where: { id: id } })
                const portfolio = await Portfolio.update({
                    title: title ? title : findIdPortfolio.title,
                    link: link ? link : findIdPortfolio.link,
                    image: img ? img : findIdPortfolio.image
                }, { where: { id: findIdPortfolio.id } })
                return res.json(portfolio)
            } else {
                const { title, link } = req.body
                const { img } = req.files
                const { id } = req.params
                const imgName = uuid.v4() + '.jpg'
                img.mv(path.resolve(__dirname, '..', 'static', imgName))
                const findIdPortfolio = await Portfolio.findOne({ where: { id: id } })
                const portfolio = await Portfolio.update({
                    title: title ? title : findIdPortfolio.title,
                    link: link ? link : findIdPortfolio.link,
                    image: img ? imgName : findIdPortfolio.image
                }, { where: { id: findIdPortfolio.id } })
                return res.json(portfolio)
            }
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async destroyPortfolio(req, res, next) {
        try {
            const { id } = req.params
            const portfolio = await Portfolio.destroy({ where: { id: id } })
            return res.json(portfolio)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
}

module.exports = new PortfolioController()