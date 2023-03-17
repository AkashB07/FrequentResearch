const dotnev = require('dotenv');
dotnev.config();

const express = require('express');
const cors = require('cors');

const sequelize=require('./util/database')

const app = express();

app.use(cors());
app.use(express.json());

//models
const Country = require('./model/countrylist');
const State = require('./model/statelist');
const City =require('./model/citylist');

//routes
const addressRoutes = require('./router/address');

app.use('/address', addressRoutes);

//creating relationship between tables

//one-to-many relation between country and state
Country.hasMany(State)
State.belongsTo(Country);

//one-to-many relation between state and city
State.hasMany(City)
City.belongsTo(State);

// sequelize.sync({force:true})
sequelize.sync()
.then(()=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err)})