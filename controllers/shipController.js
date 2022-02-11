const Ship = require("../models/shipModel")
const base = require("./baseController")


exports.createShip = base.createOne(Ship);
exports.getAllShip = base.getAll(Ship);