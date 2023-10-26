const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const AboutMe = sequelize.define('aboutMe', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    lastName: { type: DataTypes.STRING, unique: true },
    country: { type: DataTypes.STRING, unique: true },
    town: { type: DataTypes.STRING, unique: true },
    description: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    phone: { type: DataTypes.STRING, unique: true },
    image: { type: DataTypes.STRING },
})

const Links = sequelize.define('links', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING, unique: true },
    link: { type: DataTypes.STRING },
})

const Skills = sequelize.define('skills', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING, unique: true },
    rating: { type: DataTypes.INTEGER },
})

const Portfolio = sequelize.define('portfolio', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    link: { type: DataTypes.STRING },
})

const Experience = sequelize.define('experience', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    company: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    time: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
})

const Education = sequelize.define('education', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    education: { type: DataTypes.STRING },
    title: { type: DataTypes.STRING },
    time: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
})

module.exports = { AboutMe, Links, Skills, Portfolio, Experience, Education }
