const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//creating a statelist table in the database
const State = sequelize.define('statelist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    state: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    }
})

module.exports = State;