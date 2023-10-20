const { AboutMe } = require('../models/models')
const ApiError = require('../exceptions/appiError')
const uuid = require('uuid')
const path = require('path')
const { where } = require('sequelize')

class AboutMeController {
    async createAboutMe(req, res, next) {
        try {
            const { name, lastName, country, town, description, email, phone } = req.body
            const { img } = req.files
            const imgName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', imgName))
            const aboutMe = await AboutMe.create({
                name: name,
                lastName: lastName,
                country: country,
                town: town,
                description: description,
                email: email,
                phone: phone,
                image: imgName
            })
            return res.json(aboutMe)
        } catch (error) {
            console.log(error)
            return next(ApiError.badRequest(error))
        }
    }

    async findAboutMe(req, res, next) {
        try {
            const aboutMe = await AboutMe.findOne()
            return res.json(aboutMe)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async updateAboutMe(req, res, next) {
        try {
            if (req.files === undefined) {
                const { name, lastName, country, town, description, email, phone } = req.body
                let img
                const findOneAboutMe = await AboutMe.findOne()
                const aboutMe = await AboutMe.update({
                    name: name ? name : findOneAboutMe.name,
                    lastName: lastName ? lastName : findOneAboutMe.lastName,
                    country: country ? country : findOneAboutMe.country,
                    town: town ? town : findOneAboutMe.town,
                    description: description ? description : findOneAboutMe.description,
                    email: email ? email : findOneAboutMe.email,
                    phone: phone ? phone : findOneAboutMe.phone,
                    image: img ? img : findOneAboutMe.image,
                }, { where: { id: findOneAboutMe.id } })
                return res.json(aboutMe)
            } else {
                const { name, lastName, country, town, description, email, phone } = req.body
                const { img } = req.files
                const newNameImg = uuid.v4() + '.jpg'
                img.mv(path.resolve(__dirname, '..', 'static', newNameImg))
                const findOneAboutMe = await AboutMe.findOne()
                const aboutMe = await AboutMe.update({
                    name: name ? name : findOneAboutMe.name,
                    lastName: lastName ? lastName : findOneAboutMe.lastName,
                    country: country ? country : findOneAboutMe.country,
                    town: town ? town : findOneAboutMe.town,
                    description: description ? description : findOneAboutMe.description,
                    email: email ? email : findOneAboutMe.email,
                    phone: phone ? phone : findOneAboutMe.phone,
                    image: img ? newNameImg : findOneAboutMe.image
                }, { where: { id: findOneAboutMe.id } })
                return res.json(aboutMe)
            }
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
}

module.exports = new AboutMeController()