const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  Name:{
    type: String,
    required: [true, "Please fill Name "]
  },
  IsDangerous:{
    type: Boolean,
    required: [true, "Please fill Boat"]
  }
})

const Category = mongoose.model("category", categorySchema)
module.exports = Category