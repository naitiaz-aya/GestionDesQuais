const QuayType = require("../models/quayTypeModel")
const base = require("./baseController")

exports.createQuayType = base.createOne(QuayType);
exports.getAllQuayType = base.getAll(QuayType);