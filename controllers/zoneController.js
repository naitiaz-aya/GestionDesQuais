const Zone = require("../models/zoneModel")
const base = require("./baseController")

exports.createZone = base.createOne(Zone);
exports.getAllZone = base.getAll(Zone);