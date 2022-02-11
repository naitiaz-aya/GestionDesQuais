const Quay = require("../models/quayModel")
const base = require("./baseController")

exports.createQuay = base.createOne(Quay);
exports.getAllQuay = base.getAll(Quay);