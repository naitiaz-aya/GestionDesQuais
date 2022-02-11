const mongoose = require("mongoose")

const shipOwnerSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  email:{
    type: String,
    required: [true, "Please fill email "]
  },
  tel:{
    type: String,
    required: [true, "Please fill tel "]
  },
  description:{
    type: String,
    required: [true, "Please fill description "]
  },
  nationality:{
    type: String,
    required: [true, "Please fill nationality "]
  },
})

const ShipOwner = mongoose.model("shipOwner", shipOwnerSchema)
module.exports = ShipOwner