const System = require("../models/systemModelModel")
const base = require("./baseController")

exports.createSystem = base.createOne(System);
exports.getAllSystem = base.getAll(System);