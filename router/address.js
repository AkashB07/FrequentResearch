const express = require('express');

const addressController = require('../controller/address')

const router = express.Router();

//router for country
router.post('/addcountry', addressController.addcountry);
router.get('/getcountry', addressController.getcountry);

//router for state
router.post('/addstate', addressController.addstate);
router.get('/getstate/:id', addressController.getstate);

//router for city
router.post('/addcity', addressController.addcity);
router.get('/getcity/:id', addressController.getcity);

module.exports = router;