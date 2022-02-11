const StorageArea = require("../models/StorageAreaModel")
const base = require("./baseController")

exports.createStorageArea = base.createOne(StorageArea);
exports.getAllStorageArea = base.getAll(StorageArea);