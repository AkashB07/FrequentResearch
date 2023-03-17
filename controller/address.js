const Country = require("../model/countrylist");
const State = require("../model/statelist");
const City = require("../model/citylist");



//storing the country name in the database
const addcountry = async (req, res) => {
  try {
    const { country } = req.body;
    console.log(country);
    const present = await Country.findAll({ where: { country: country } });
    if (present.length > 0) {
      return res
        .status(500)
        .json({ succese: false, error: "Country already present" });
    }
    const respone = await Country.create({ country: country });
    return res.status(201).json({ respone, succese: true });
  } catch (error) {
    return res.status(500).json({ succese: false, error: error });
  }
};


//retriving the country name from the database
const getcountry = async (req, res) => {
  try {
    const response = await Country.findAll();
    res.status(200).json({ data: response, success: true });
  } catch (error) {
    return res.status(500).json({ succese: false, error: error });
  }
};



//storing the state name in the database
const addstate = async (req, res) => {
  try {
    console.log("123");
    const { country, state } = req.body;
    console.log(country);

    const coun = await Country.findOne({ where: { country: country } });
    console.log(coun.id);

    const present = await State.findAll({ where: { state: state } });
    if (present.length > 0) {
      return res
        .status(500)
        .json({ succese: false, error: "State already present" });
    }

    const respone = await State.create({
      state: state,
      countrylistId: coun.id,
    });
    return res.status(201).json({ respone, succese: true });
  } catch (error) {
    return res.status(500).json({ succese: false, error: error });
  }
};


//retriving the country name from the database
const getstate = async (req, res) => {
  try {
    const country = req.params.id;

    const coun = await Country.findOne({ where: { country: country } });
    console.log(coun.id);
    const response = await State.findAll({ where: { countrylistId: coun.id } });
    res.status(200).json({ data: response, success: true });
  } catch (error) {
    return res.status(500).json({ succese: false, error: error });
  }
};



//storing the city name in the database
const addcity = async (req, res) => {
  try {
    console.log("123");
    const { country, state, city } = req.body;
    console.log(country);

    const sat = await State.findOne({ where: { state: state } });
    console.log(sat.id);

    const present = await City.findAll({ where: { city: city } });
    if (present.length > 0) {
      return res
        .status(500)
        .json({ succese: false, error: "City already present" });
    }

    const respone = await City.create({
      city: city,
      statelistId: sat.id,
    });
    return res.status(201).json({ respone, succese: true });
  } catch (error) {
    return res.status(500).json({ succese: false, error: error });
  }
};


//retriving the city name from the database
const getcity = async (req, res) => {
  try {
    const state = req.params.id;

    const sat = await State.findOne({ where: { state: state } });
    console.log(sat.id);
    const response = await City.findAll({ where: { statelistId: sat.id } });
    res.status(200).json({ data: response, success: true });
  } catch (error) {
    return res.status(500).json({ succese: false, error: error });
  }
};

module.exports = {
  addcountry,
  getcountry,
  addstate,
  getstate,
  addcity,
  getcity
};