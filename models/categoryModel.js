const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  isDangerous:{
    type: Boolean,
    required: [true, "Please fill isDangerous"]
  }
})

const Category = mongoose.model("category", categorySchema)
module.exports = Category