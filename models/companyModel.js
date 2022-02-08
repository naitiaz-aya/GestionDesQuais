const mongoose = require("mongoose")

const companySchema = new mongoose.Schema({
  Name:{
    type: String,
    required: [true, "Please fill Name "]
  },
  Adress:{
    type: String,
    required: [true, "Please fill Adress "]
  },
})

const Company = mongoose.model("company", companySchema)
module.exports = Company