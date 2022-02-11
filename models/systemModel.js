const mongoose = require("mongoose")

const driverSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  description:{
    type: String,
    required: [true, "Please fill description "]
  },
  storageDeadLine:{
    type: Number,
    required: [true, "Please fill storageDeadLine "]
  },
  lateShippingFee:{
    type: Number,
    required: [true, "Please fill lateShippingFee "]
  },
  capacityPerQuay:{
    type: Number,
    required: [true, "Please fill capacityPerQuay "]
  },
  quaisFeesPerDay:{
    type: Number,
    required: [true, "Please fill quaisFeesPerDay "]
  },
  
})

const Driver = mongoose.model("driver", driverSchema)
module.exports = Driver