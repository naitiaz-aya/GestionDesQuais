const mongoose = require("mongoose")

const truckSchema = new mongoose.Schema({
  Name:{
    type: String,
    required: [true, "Please fill Name "]
  },
  Driver_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Driver"]
  }
})

const Truck = mongoose.model("truck", truckSchema)
module.exports = Truck