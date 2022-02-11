const mongoose = require("mongoose")

const driverSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  tel:{
    type: String,
    required: [true, "Please fill tel "]
  },
  truckId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill truckId"]
  },
})

const Driver = mongoose.model("driver", driverSchema)
module.exports = Driver