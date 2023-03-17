const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//creating a countrylist table in the database
const Country = sequelize.define('countrylist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    country: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    }
})

module.exports = Country;