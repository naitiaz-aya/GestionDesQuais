const BlockPart = require("../models/blockPartModel")
const base = require("./baseController")

exports.createBlockPart = base.createOne(BlockPart);
exports.getAllBlockPart = base.getAll(BlockPart);