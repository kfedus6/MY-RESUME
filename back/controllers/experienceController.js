const { Experience } = require('../models/models')
const ApiError = require('../exceptions/appiError')

class ExperienceController {
    async createExperience(req, res, next) {
        try {
            const { company, time, description, title } = req.body
            const experience = await Experience.create({
                company: company,
                title: title,
                time: time,
                description: description
            })
            return res.json(experience)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
    async findAllExperiences(req, res, next) {
        try {
            const experience = await Experience.findAll()
            return res.json(experience)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
    async updateExperience(req, res, next) {
        try {
            const { company, time, description, title } = req.body
            const { id } = req.params
            const experience = await Experience.findOne({ where: { id: id } })
            const newExperience = await Experience.update({
                company: company ? company : experience.company,
                title: title ? title : experience.title,
                time: time ? time : experience.time,
                description: description ? description : experience.description,
            }, { where: { id: experience.id } })
            return res.json(newExperience)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
    async destroyExperience(req, res, next) {
        try {
            const { id } = req.params
            const experience = await Experience.destroy({ where: { id: id } })
            return res.json(experience)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
}

module.exports = new ExperienceController()