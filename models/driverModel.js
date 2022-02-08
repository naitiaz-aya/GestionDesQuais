const mongoose = require("mongoose")

const driverSchema = new mongoose.Schema({
  Name:{
    type: String,
    required: [true, "Please fill Name "]
  },
  Tel:{
    type: String,
    required: [true, "Please fill Tel "]
  },
})

const Driver = mongoose.model("driver", driverSchema)
module.exports = Driver