const Driver = require("../models/driverModel")
const base = require("./baseController")

exports.createDriver = base.createOne(Driver);
exports.getAllDriver = base.getAll(Driver);