require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const errorMiddleware = require('./middleware/errorMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')
const router = require('./routes/index')

const server = express(router)

server.use(express.json())
server.use(cors())
server.use(fileUpload({}))
server.use('/portfolio', router)
server.use(express.static(path.resolve(__dirname, 'static')))
server.use(errorMiddleware)

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        server.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()