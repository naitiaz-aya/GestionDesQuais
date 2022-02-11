const mongoose = require("mongoose")

const shipSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  nationality:{
    type: String,
    required: [true, "Please fill nationality"]
  },
  capacity:{
    type: Number,
    required: [true, "Please fill capacity"]
  },
  type:{
    type: String,
    required: [true, "Please fill type"]
  },
  shipOwner:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill shipOwner"]
  },
})

const Ship = mongoose.model("ship", shipSchema)
module.exports = Ship