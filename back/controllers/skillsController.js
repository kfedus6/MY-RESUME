const { Skills } = require('../models/models')
const ApiError = require('../exceptions/appiError')
const uuid = require('uuid')
const path = require('path')

class SkillsController {
    async createSkill(req, res, next) {
        try {
            const { title, rating } = req.body
            const { img } = req.files
            const imgName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', imgName))
            const skills = await Skills.create({
                title: title,
                rating: rating,
                image: imgName
            })
            return res.json(skills)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async findAllSkills(req, res, next) {
        try {
            const skills = await Skills.findAll()
            return res.json(skills)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async updateSkill(req, res, next) {
        try {
            if (req.files === undefined) {
                const { title, rating } = req.body
                const { id } = req.params
                let img
                const findIdSkills = await Skills.findOne({ where: { id: id } })
                const skills = await Skills.update({
                    title: title ? title : findIdSkills.title,
                    rating: rating ? rating : findIdSkills.rating,
                    image: img ? img : findIdSkills.image
                }, { where: { id: findIdSkills.id } })
                return res.json(skills)
            } else {
                const { title, rating } = req.body
                const { img } = req.files
                const { id } = req.params
                const imgName = uuid.v4() + '.jpg'
                img.mv(path.resolve(__dirname, '..', 'static', imgName))
                const findIdSkills = await Skills.findOne({ where: { id: id } })
                const skills = await Skills.update({
                    title: title ? title : findIdSkills.title,
                    rating: rating ? rating : findIdSkills.rating,
                    image: img ? imgName : findIdSkills.image
                }, { where: { id: findIdSkills.id } })
                return res.json(skills)
            }
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }

    async destroySkill(req, res, next) {
        try {
            const { id } = req.params
            const skills = await Skills.destroy({ where: { id: id } })
            return res.json(skills)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
}

module.exports = new SkillsController()