const Truck = require("../models/truckModel")
const base = require("./baseController")

exports.createTruck = base.createOne(Truck);
exports.getAllTruck = base.getAll(Truck);