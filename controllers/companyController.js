const Company = require("../models/companyModel")
const base = require("./baseController")

exports.createCompany = base.createOne(Company);
exports.getAllCompany = base.getAll(Company);