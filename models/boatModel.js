const mongoose = require("mongoose")

const boatSchema = new mongoose.Schema({
  Name:{
    type: String,
    required: [true, "Please fill Name "]
  },
  Origin:{
    type: String,
    required: [true, "Please fill origin"]
  },
  Qt_Container:{
    type: Number,
    required: [true, "Please fill qt_Container"]
  },
})

const Boat = mongoose.model("boat", boatSchema)
module.exports = Boat