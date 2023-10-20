const { Education } = require('../models/models')
const ApiError = require('../exceptions/appiError')

class EducationController {
    async createEducation(req, res, next) {
        try {
            const { education, title, time, description } = req.body
            const newEducation = await Education.create({
                education: education,
                title: title,
                time: time,
                description: description
            })
            return res.json(newEducation)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
    async findAllEducations(req, res, next) {
        try {
            const { education, title, time, description } = req.body
            const findEducation = await Education.findAll()
            return res.json(findEducation)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
    async updateEducation(req, res, next) {
        try {
            const { education, title, time, description } = req.body
            const { id } = req.params
            const findEducation = await Education.findOne({ where: { id: id } })
            const newEducation = await Education.update({
                education: education ? education : findEducation.education,
                title: title ? title : findEducation.title,
                time: time ? time : findEducation.time,
                description: description ? description : findEducation.description,
            }, { where: { id: findEducation.id } })
            return res.json(newEducation)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
    async destroyEducation(req, res, next) {
        try {
            const { id } = req.params
            const education = await Education.destroy({ where: { id: id } })
            return res.json(education)
        } catch (error) {
            return next(ApiError.badRequest(error))
        }
    }
}

module.exports = new EducationController()