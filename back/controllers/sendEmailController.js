const nodemailer = require('nodemailer')

class SendEmailController {
    async sendEmail(req, res) {
        const { email, name, message } = req.body
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'fmykola6@gmail.com',
                pass: 'Chelsea1905'
            }
        })
        const mailOptions = {
            from: email,
            to: 'feduskolya@gmail.com',
            subject: 'Hello',
            text: message
        }
        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.log('Error+', error)
            } else {
                console.log('Send message')
            }
        })
    }
}

module.exports = new SendEmailController()