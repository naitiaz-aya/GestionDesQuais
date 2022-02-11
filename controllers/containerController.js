const Container = require("../models/containerModel")
const base = require("./baseController")

exports.createContainer = base.createOne(Container);
exports.getAllContainer = base.getAll(Container);