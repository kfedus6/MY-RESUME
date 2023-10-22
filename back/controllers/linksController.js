const { Links } = require('../models/models')
const ApiError = require('../exceptions/appiError')
const uuid = require('uuid')
const path = require('path')

class LinksController {
    async createLink(req, res, next) {
        try {
            const { title, link } = req.body
            const { img } = req.files
            const imgName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', imgName))
            const links = await Links.create({
                title: title,
                link: link,
                image: imgName
            })
            return res.json(links)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async findAllLinks(req, res, next) {
        try {
            const links = await Links.findAll()
            return res.json(links)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async updateLink(req, res, next) {
        try {
            if (req.files === undefined) {
                const { title, link } = req.body
                const { id } = req.params
                let img
                const findIdlink = await Links.findOne({ where: { id: id } })
                const links = await Links.update({
                    title: title ? title : findIdlink.title,
                    link: link ? link : findIdlink.link,
                    image: img ? img : findIdlink.image
                }, { where: { id: findIdlink.id } })
                return res.json(links)
            } else {
                const { title, link } = req.body
                const { img } = req.files
                const { id } = req.params
                const imgName = uuid.v4() + '.jpg'
                img.mv(path.resolve(__dirname, '..', 'static', imgName))
                const findIdlink = await Links.findOne({ where: { id: id } })
                const links = await Links.update({
                    title: title ? title : findIdlink.title,
                    link: link ? link : findIdlink.link,
                    image: img ? imgName : findIdlink.image
                }, { where: { id: findIdlink.id } })
                return res.json(links)
            }
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async destroyLink(req, res, next) {
        try {
            const { id } = req.params
            const link = await Links.destroy({ where: { id: id } })
            return res.json(link)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
}

module.exports = new LinksController()

