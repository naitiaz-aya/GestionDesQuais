const ShipOwner = require("../models/shipOwnerModel")
const base = require("./baseController")


exports.createShipOwner = base.createOne(ShipOwner);
exports.getAllShipOwner = base.getAll(ShipOwner);