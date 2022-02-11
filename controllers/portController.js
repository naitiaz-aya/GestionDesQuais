const Port = require("../models/portModel")
const base = require("./baseController")

exports.createPort = base.createOne(Port);
exports.getAllPort = base.getAll(Port);