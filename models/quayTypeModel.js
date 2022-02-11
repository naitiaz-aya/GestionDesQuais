const mongoose = require("mongoose")

const quayTypeSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  description:{
    type: String,
    required: [true, "Please fill description "]
  }
})

const QuayType = mongoose.model("quayType", quayTypeSchema)
module.exports = QuayType