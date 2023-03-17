const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//creating a citylist table in the database
const City = sequelize.define('citylist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    city: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    }
})

module.exports = City;