const mongoose = require("mongoose")

const exitSchema = new mongoose.Schema({
  Date:{
    type: Date,
    required: [true, "Please fill Date "]
  },
  Truck_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Truck"]
  },
  Client_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Client"]
  },
  Driver_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Driver"]
  },
})

const Exit = mongoose.model("exit", exitSchema)
module.exports = Exit 