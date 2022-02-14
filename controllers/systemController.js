const System = require("../models/systemModel")
const base = require("./baseController")

exports.createSystem = base.createOne(System);
exports.getAllSystem = base.getAll(System);