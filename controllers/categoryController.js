const Category = require("../models/categoryModel")
const base = require("./baseController")

exports.createCategory = base.createOne(Category);
exports.getAllCategory = base.getAll(Category);