const mongoose = require("mongoose")

const blockPartSchema = new mongoose.Schema({
  xIndex:{
    type: String,
    required: [true, "Please fill xIndex "]
  },
  yIndex:{
    type: String,
    required: [true, "Please fill yIndex "]
  },
  zIndex:{
    type: String,
    required: [true, "Please fill zIndex"]
  },
})

const BlockPart = mongoose.model("blockPart", blockPartSchema)
module.exports = BlockPart