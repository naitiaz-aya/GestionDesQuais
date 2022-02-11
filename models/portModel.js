const mongoose = require("mongoose")

const portSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  description:{
    type: String,
    required: [true, "Please fill description"]
  },
  systemId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill systemId"]
  },
})

const Port = mongoose.model("port", portSchema)
module.exports = Port