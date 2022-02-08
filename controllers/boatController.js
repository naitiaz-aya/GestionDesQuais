const Boat = require("../models/boatModel")
const base = require("./baseController")


exports.createBoat = base.createOne(Boat);
exports.getAllBoat = base.getAll(Boat);