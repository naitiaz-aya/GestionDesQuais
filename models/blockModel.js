const mongoose = require("mongoose")

const blockSchema = new mongoose.Schema({
  ref:{
    type: String,
    required: [true, "Please fill Ref "]
  },
  partId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill partId"]
  },
})

const Block = mongoose.model("block", blockSchema)
module.exports = Block