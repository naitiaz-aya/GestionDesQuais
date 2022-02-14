const mongoose = require("mongoose")

const quayTypeSchema = new mongoose.Schema({
  description:{
    type: String,
    required: [true, "Please fill description "]
  }
})

const QuayType = mongoose.model("quayType", quayTypeSchema)
module.exports = QuayType